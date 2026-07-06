"""Organization settings (singleton row) for the Admin & Role Management
module."""

from sqlalchemy.orm import Session

from app.models.user import OrgSetting
from app.Schemas.user import OrgSettingUpdate


def get_settings(db: Session) -> OrgSetting:
    row = db.query(OrgSetting).first()
    if not row:
        row = OrgSetting()
        db.add(row)
        db.commit()
        db.refresh(row)
    return row


def update_settings(db: Session, payload: OrgSettingUpdate) -> OrgSetting:
    row = get_settings(db)
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(row, field, value)
    db.commit()
    db.refresh(row)
    return row
