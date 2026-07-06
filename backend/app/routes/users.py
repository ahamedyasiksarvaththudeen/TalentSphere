"""User management endpoints (HR, recruiters, hiring managers, admins) for
the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import UserCreate, UserRead, UserUpdateRole, UserUpdateStatus
from app.services import user_service

router = APIRouter(prefix="/users", tags=["Admin & Role Management - Users"])


@router.get("", response_model=list[UserRead], dependencies=[Depends(require_roles("Admin"))])
def list_users(db: Session = Depends(get_db)):
    return user_service.list_users(db)


@router.post("", response_model=UserRead, dependencies=[Depends(require_roles("Admin"))])
def create_user(payload: UserCreate, db: Session = Depends(get_db)):
    return user_service.create_user(db, payload)


@router.patch("/{user_id}/role", response_model=UserRead, dependencies=[Depends(require_roles("Admin"))])
def update_role(user_id: int, payload: UserUpdateRole, db: Session = Depends(get_db)):
    return user_service.update_role(db, user_id, payload.role)


@router.patch("/{user_id}/status", response_model=UserRead, dependencies=[Depends(require_roles("Admin"))])
def update_status(user_id: int, payload: UserUpdateStatus, db: Session = Depends(get_db)):
    return user_service.update_status(db, user_id, payload.status)


@router.delete("/{user_id}", dependencies=[Depends(require_roles("Admin"))])
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user_service.delete_user(db, user_id)
    return {"detail": "User deleted"}
