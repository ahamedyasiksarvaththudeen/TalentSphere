"""Candidate Profile Management module business logic. Any create or resume
upload triggers a duplicate scan (Duplicate Candidate Detection module)."""

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.models.candidate import Candidate, CandidateFeedback, RecruiterNote
from app.Schemas.candidate import (
    CandidateCreate,
    CandidateFeedbackCreate,
    CandidateUpdate,
    RecruiterNoteCreate,
)
from app.services import duplicate_service
from app.utils.file_storage import save_upload_file
from app.utils.hashing import sha256_of_file


def list_candidates(
    db: Session,
    applied_job_id: int | None = None,
    screening_status: str | None = None,
    interview_status: str | None = None,
    final_selection_status: str | None = None,
) -> list[Candidate]:
    query = db.query(Candidate).filter(Candidate.is_archived.is_(False))
    if applied_job_id is not None:
        query = query.filter(Candidate.applied_job_id == applied_job_id)
    if screening_status:
        query = query.filter(Candidate.screening_status == screening_status)
    if interview_status:
        query = query.filter(Candidate.interview_status == interview_status)
    if final_selection_status:
        query = query.filter(Candidate.final_selection_status == final_selection_status)
    return query.order_by(Candidate.created_at.desc()).all()


def get_candidate(db: Session, candidate_id: int) -> Candidate:
    candidate = db.get(Candidate, candidate_id)
    if not candidate or candidate.is_archived:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Candidate not found")
    return candidate


def create_candidate(db: Session, payload: CandidateCreate) -> Candidate:
    candidate = Candidate(**payload.model_dump())
    db.add(candidate)
    db.commit()
    db.refresh(candidate)
    duplicate_service.scan_for_duplicates(db, candidate)
    return candidate


def update_candidate(db: Session, candidate_id: int, payload: CandidateUpdate) -> Candidate:
    candidate = get_candidate(db, candidate_id)
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(candidate, field, value)
    db.commit()
    db.refresh(candidate)
    return candidate


def upload_resume(db: Session, candidate_id: int, file: UploadFile) -> Candidate:
    candidate = get_candidate(db, candidate_id)
    path = save_upload_file(file, subfolder="resumes")
    candidate.resume_file_path = path
    candidate.resume_sha256 = sha256_of_file(path)
    db.commit()
    db.refresh(candidate)
    duplicate_service.scan_for_duplicates(db, candidate)
    return candidate


def set_screening_status(db: Session, candidate_id: int, value: str) -> Candidate:
    candidate = get_candidate(db, candidate_id)
    candidate.screening_status = value
    db.commit()
    db.refresh(candidate)
    return candidate


def set_interview_status(db: Session, candidate_id: int, value: str) -> Candidate:
    candidate = get_candidate(db, candidate_id)
    candidate.interview_status = value
    db.commit()
    db.refresh(candidate)
    return candidate


def set_final_status(db: Session, candidate_id: int, value: str) -> Candidate:
    candidate = get_candidate(db, candidate_id)
    candidate.final_selection_status = value
    db.commit()
    db.refresh(candidate)
    return candidate


def add_note(db: Session, candidate_id: int, payload: RecruiterNoteCreate) -> RecruiterNote:
    get_candidate(db, candidate_id)
    note = RecruiterNote(candidate_id=candidate_id, **payload.model_dump())
    db.add(note)
    db.commit()
    db.refresh(note)
    return note


def add_feedback(db: Session, candidate_id: int, payload: CandidateFeedbackCreate) -> CandidateFeedback:
    get_candidate(db, candidate_id)
    feedback = CandidateFeedback(candidate_id=candidate_id, **payload.model_dump())
    db.add(feedback)
    db.commit()
    db.refresh(feedback)
    return feedback


def archive_candidate(db: Session, candidate_id: int) -> None:
    candidate = get_candidate(db, candidate_id)
    candidate.is_archived = True
    db.commit()
