"""Role/permission matrix endpoints for the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import RolePermissionRead, RolePermissionUpdate
from app.services import permission_service

router = APIRouter(prefix="/permissions", tags=["Admin & Role Management - Permissions"])


@router.get("/matrix", response_model=list[RolePermissionRead], dependencies=[Depends(require_roles("Admin"))])
def get_matrix(db: Session = Depends(get_db)):
    links = permission_service.list_permission_matrix(db)
    return [
        RolePermissionRead(
            role=link.role,
            permission_id=link.permission_id,
            permission_name=link.permission.name,
            allowed=link.allowed,
        )
        for link in links
    ]


@router.put("/matrix", dependencies=[Depends(require_roles("Admin"))])
def set_matrix_entry(payload: RolePermissionUpdate, db: Session = Depends(get_db)):
    permission_service.set_permission(db, payload.role, payload.permission_id, payload.allowed)
    return {"detail": "Permission updated"}
