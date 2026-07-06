"""Department management endpoints for the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import DepartmentCreate, DepartmentRead
from app.services import department_service

router = APIRouter(prefix="/departments", tags=["Admin & Role Management - Departments"])


@router.get("", response_model=list[DepartmentRead])
def list_departments(db: Session = Depends(get_db)):
    return department_service.list_departments(db)


@router.post("", response_model=DepartmentRead, dependencies=[Depends(require_roles("Admin"))])
def create_department(payload: DepartmentCreate, db: Session = Depends(get_db)):
    return department_service.create_department(db, payload)


@router.delete("/{department_id}", dependencies=[Depends(require_roles("Admin"))])
def delete_department(department_id: int, db: Session = Depends(get_db)):
    department_service.delete_department(db, department_id)
    return {"detail": "Department deleted"}
