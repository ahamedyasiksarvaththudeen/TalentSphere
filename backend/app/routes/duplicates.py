"""Duplicate Candidate Detection module endpoints: list flagged duplicate
pairs (email, phone, resume upload or similar-profile matches) and let HR
merge or keep them separate."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.duplicate import DuplicateMatchRead, DuplicateResolveRequest
from app.services import duplicate_service

router = APIRouter(prefix="/duplicates", tags=["Duplicate Candidate Detection"])


@router.get("", response_model=list[DuplicateMatchRead])
def list_duplicates(status: str | None = None, db: Session = Depends(get_db)):
    return duplicate_service.list_duplicates(db, status_filter=status)


@router.post(
    "/{match_id}/resolve",
    response_model=DuplicateMatchRead,
    dependencies=[Depends(require_roles("Admin", "Recruiter"))],
)
def resolve_duplicate(match_id: int, payload: DuplicateResolveRequest, db: Session = Depends(get_db)):
    return duplicate_service.resolve(db, match_id, payload.action)
