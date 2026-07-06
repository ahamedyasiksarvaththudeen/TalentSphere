"""Candidate Profile Management module endpoints: personal details, resume
file, parsed resume details, applied job role, AI score, matching score,
screening status, interview status, recruiter notes, feedback and final
selection status."""

from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.candidate import (
    CandidateCreate,
    CandidateFeedbackCreate,
    CandidateFeedbackRead,
    CandidateFinalStatusUpdate,
    CandidateInterviewStatusUpdate,
    CandidateRead,
    CandidateScreeningStatusUpdate,
    CandidateUpdate,
    RecruiterNoteCreate,
    RecruiterNoteRead,
)
from app.services import candidate_service

router = APIRouter(prefix="/candidates", tags=["Candidate Profile Management"])

_can_edit = Depends(require_roles("Admin", "Recruiter"))
_can_create = Depends(require_roles("Admin", "Recruiter", "Coordinator"))
_can_give_feedback = Depends(require_roles("Admin", "Recruiter", "Hiring manager", "Interviewer"))


@router.get("", response_model=list[CandidateRead])
def list_candidates(
    applied_job_id: int | None = None,
    screening_status: str | None = None,
    interview_status: str | None = None,
    final_selection_status: str | None = None,
    db: Session = Depends(get_db),
):
    return candidate_service.list_candidates(
        db,
        applied_job_id=applied_job_id,
        screening_status=screening_status,
        interview_status=interview_status,
        final_selection_status=final_selection_status,
    )


@router.get("/{candidate_id}", response_model=CandidateRead)
def get_candidate(candidate_id: int, db: Session = Depends(get_db)):
    return candidate_service.get_candidate(db, candidate_id)


@router.post("", response_model=CandidateRead, dependencies=[_can_create])
def create_candidate(payload: CandidateCreate, db: Session = Depends(get_db)):
    return candidate_service.create_candidate(db, payload)


@router.patch("/{candidate_id}", response_model=CandidateRead, dependencies=[_can_edit])
def update_candidate(candidate_id: int, payload: CandidateUpdate, db: Session = Depends(get_db)):
    return candidate_service.update_candidate(db, candidate_id, payload)


@router.post("/{candidate_id}/resume", response_model=CandidateRead, dependencies=[_can_create])
def upload_resume(candidate_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    return candidate_service.upload_resume(db, candidate_id, file)


@router.patch("/{candidate_id}/screening-status", response_model=CandidateRead, dependencies=[_can_edit])
def set_screening_status(candidate_id: int, payload: CandidateScreeningStatusUpdate, db: Session = Depends(get_db)):
    return candidate_service.set_screening_status(db, candidate_id, payload.screening_status)


@router.patch(
    "/{candidate_id}/interview-status",
    response_model=CandidateRead,
    dependencies=[Depends(require_roles("Admin", "Recruiter", "Interviewer"))],
)
def set_interview_status(candidate_id: int, payload: CandidateInterviewStatusUpdate, db: Session = Depends(get_db)):
    return candidate_service.set_interview_status(db, candidate_id, payload.interview_status)


@router.patch(
    "/{candidate_id}/final-status",
    response_model=CandidateRead,
    dependencies=[Depends(require_roles("Admin", "Recruiter", "Hiring manager"))],
)
def set_final_status(candidate_id: int, payload: CandidateFinalStatusUpdate, db: Session = Depends(get_db)):
    return candidate_service.set_final_status(db, candidate_id, payload.final_selection_status)


@router.post("/{candidate_id}/notes", response_model=RecruiterNoteRead, dependencies=[_can_give_feedback])
def add_note(candidate_id: int, payload: RecruiterNoteCreate, db: Session = Depends(get_db)):
    return candidate_service.add_note(db, candidate_id, payload)


@router.post("/{candidate_id}/feedback", response_model=CandidateFeedbackRead, dependencies=[_can_give_feedback])
def add_feedback(candidate_id: int, payload: CandidateFeedbackCreate, db: Session = Depends(get_db)):
    return candidate_service.add_feedback(db, candidate_id, payload)


@router.delete("/{candidate_id}", dependencies=[_can_edit])
def archive_candidate(candidate_id: int, db: Session = Depends(get_db)):
    candidate_service.archive_candidate(db, candidate_id)
    return {"detail": "Candidate archived"}
