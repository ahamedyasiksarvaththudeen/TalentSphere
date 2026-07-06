"""Login-activity queries for the Admin & Role Management module."""

from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.models.user import LoginActivity


def list_activity(db: Session, limit: int = 100) -> list[LoginActivity]:
    return db.query(LoginActivity).order_by(desc(LoginActivity.created_at)).limit(limit).all()
