"""Job category management endpoints for the Admin & Role Management
module (categories are consumed by Job Requirement Management)."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import JobCategoryCreate, JobCategoryRead
from app.services import job_category_service

router = APIRouter(prefix="/job-categories", tags=["Admin & Role Management - Job categories"])


@router.get("", response_model=list[JobCategoryRead])
def list_categories(db: Session = Depends(get_db)):
    return job_category_service.list_categories(db)


@router.post("", response_model=JobCategoryRead, dependencies=[Depends(require_roles("Admin"))])
def create_category(payload: JobCategoryCreate, db: Session = Depends(get_db)):
    return job_category_service.create_category(db, payload)


@router.delete("/{category_id}", dependencies=[Depends(require_roles("Admin"))])
def delete_category(category_id: int, db: Session = Depends(get_db)):
    job_category_service.delete_category(db, category_id)
    return {"detail": "Job category deleted"}
