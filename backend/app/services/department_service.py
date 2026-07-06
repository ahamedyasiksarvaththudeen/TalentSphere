"""Department management for the Admin & Role Management module."""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import Department
from app.Schemas.user import DepartmentCreate


def list_departments(db: Session) -> list[Department]:
    return db.query(Department).order_by(Department.name).all()


def create_department(db: Session, payload: DepartmentCreate) -> Department:
    if db.query(Department).filter(Department.name == payload.name).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Department already exists")
    department = Department(**payload.model_dump())
    db.add(department)
    db.commit()
    db.refresh(department)
    return department


def delete_department(db: Session, department_id: int) -> None:
    department = db.get(Department, department_id)
    if not department:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Department not found")
    db.delete(department)
    db.commit()
