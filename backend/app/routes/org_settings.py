"""Organization settings endpoints for the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import OrgSettingRead, OrgSettingUpdate
from app.services import org_settings_service

router = APIRouter(prefix="/org-settings", tags=["Admin & Role Management - Org settings"])


@router.get("", response_model=OrgSettingRead)
def get_settings(db: Session = Depends(get_db)):
    return org_settings_service.get_settings(db)


@router.put("", response_model=OrgSettingRead, dependencies=[Depends(require_roles("Admin"))])
def update_settings(payload: OrgSettingUpdate, db: Session = Depends(get_db)):
    return org_settings_service.update_settings(db, payload)
