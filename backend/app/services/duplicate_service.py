"""Duplicate Candidate Detection module business logic: checks a candidate
against every other active candidate for a matching email, phone number,
resume upload (SHA-256 hash) or similar profile (Sentence-BERT / text
similarity), and records any match at or above the configured threshold so
HR sees a duplicate warning and can merge or ignore it."""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.models.candidate import Candidate, CandidateFeedback, RecruiterNote
from app.models.duplicate import DuplicateMatch, DuplicateStatusEnum
from app.utils.similarity import profile_similarity


def scan_for_duplicates(db: Session, candidate: Candidate) -> list[DuplicateMatch]:
    matches: list[DuplicateMatch] = []
    others = (
        db.query(Candidate)
        .filter(Candidate.id != candidate.id, Candidate.is_archived.is_(False))
        .all()
    )

    for other in others:
        if _already_flagged(db, candidate.id, other.id):
            continue

        signals: list[str] = []
        score = 0.0

        if candidate.email and other.email and candidate.email.lower() == other.email.lower():
            signals.append("Email")
            score = max(score, 100.0)

        if candidate.phone and other.phone and candidate.phone == other.phone:
            signals.append("Phone")
            score = max(score, 95.0)

        if candidate.resume_sha256 and candidate.resume_sha256 == other.resume_sha256:
            signals.append("Resume upload")
            score = max(score, 97.0)

        profile_score = profile_similarity(candidate.full_name, "", other.full_name, "")
        if profile_score >= settings.duplicate_similarity_threshold:
            signals.append("Similar profile")
            score = max(score, profile_score)

        if signals and score >= settings.duplicate_similarity_threshold:
            match = DuplicateMatch(
                candidate_a_id=candidate.id,
                candidate_b_id=other.id,
                similarity_score=round(score),
                matched_signals=signals,
            )
            db.add(match)
            matches.append(match)

    if matches:
        db.commit()
        for match in matches:
            db.refresh(match)

    return matches


def _already_flagged(db: Session, candidate_id: int, other_id: int) -> bool:
    return (
        db.query(DuplicateMatch)
        .filter(
            DuplicateMatch.candidate_a_id.in_([candidate_id, other_id]),
            DuplicateMatch.candidate_b_id.in_([candidate_id, other_id]),
        )
        .first()
        is not None
    )


def list_duplicates(db: Session, status_filter: str | None = None) -> list[DuplicateMatch]:
    query = db.query(DuplicateMatch)
    if status_filter:
        query = query.filter(DuplicateMatch.status == status_filter)
    return query.order_by(DuplicateMatch.similarity_score.desc()).all()


def resolve(db: Session, match_id: int, action: str) -> DuplicateMatch:
    match = db.get(DuplicateMatch, match_id)
    if not match:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Duplicate match not found")

    if action == "merge":
        _merge_candidates(db, keep_id=match.candidate_a_id, drop_id=match.candidate_b_id)
        match.status = DuplicateStatusEnum.merged.value
    else:
        match.status = DuplicateStatusEnum.kept_separate.value

    db.commit()
    db.refresh(match)
    return match


def _merge_candidates(db: Session, keep_id: int, drop_id: int) -> None:
    """Merge the duplicate into the primary record: reassign notes and
    feedback, then archive the duplicate instead of deleting it outright so
    application history stays intact and the merge is reversible."""
    db.query(RecruiterNote).filter(RecruiterNote.candidate_id == drop_id).update({"candidate_id": keep_id})
    db.query(CandidateFeedback).filter(CandidateFeedback.candidate_id == drop_id).update({"candidate_id": keep_id})

    duplicate_candidate = db.get(Candidate, drop_id)
    if duplicate_candidate:
        duplicate_candidate.is_archived = True
