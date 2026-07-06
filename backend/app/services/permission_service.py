"""Role/permission matrix management for the Admin & Role Management module."""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import Permission, RolePermission


def list_permission_matrix(db: Session) -> list[RolePermission]:
    return db.query(RolePermission).join(Permission).all()


def set_permission(db: Session, role: str, permission_id: int, allowed: bool) -> RolePermission:
    link = db.query(RolePermission).filter_by(role=role, permission_id=permission_id).first()
    if not link:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role/permission pair not found")
    link.allowed = allowed
    db.commit()
    db.refresh(link)
    return link
