"""Job category management for the Admin & Role Management module (used to
classify job requisitions created in the Job Requirement Management module)."""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import JobCategory
from app.Schemas.user import JobCategoryCreate


def list_categories(db: Session) -> list[JobCategory]:
    return db.query(JobCategory).order_by(JobCategory.name).all()


def create_category(db: Session, payload: JobCategoryCreate) -> JobCategory:
    if db.query(JobCategory).filter(JobCategory.name == payload.name).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Job category already exists")
    category = JobCategory(**payload.model_dump())
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, category_id: int) -> None:
    category = db.get(JobCategory, category_id)
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job category not found")
    db.delete(category)
    db.commit()
