"""User management (HR, recruiters, hiring managers, admins, ...) for the
Admin & Role Management module."""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.models.user import User
from app.Schemas.user import UserCreate


def list_users(db: Session) -> list[User]:
    return db.query(User).order_by(User.full_name).all()


def get_user(db: Session, user_id: int) -> User:
    user = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user


def create_user(db: Session, payload: UserCreate) -> User:
    if db.query(User).filter(User.email == payload.email).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="A user with this email already exists")

    user = User(
        full_name=payload.full_name,
        email=payload.email,
        title=payload.title,
        role=payload.role,
        department_id=payload.department_id,
        hashed_password=hash_password(payload.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def update_role(db: Session, user_id: int, role: str) -> User:
    user = get_user(db, user_id)
    user.role = role
    db.commit()
    db.refresh(user)
    return user


def update_status(db: Session, user_id: int, status_value: str) -> User:
    user = get_user(db, user_id)
    user.status = status_value
    db.commit()
    db.refresh(user)
    return user


def delete_user(db: Session, user_id: int) -> None:
    user = get_user(db, user_id)
    db.delete(user)
    db.commit()
