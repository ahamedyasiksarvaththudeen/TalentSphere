"""Login-activity endpoints for the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.user import LoginActivityRead
from app.services import login_activity_service

router = APIRouter(prefix="/login-activity", tags=["Admin & Role Management - Login activity"])


@router.get(
    "",
    response_model=list[LoginActivityRead],
    dependencies=[Depends(require_roles("Admin", "Compliance"))],
)
def list_activity(limit: int = 100, db: Session = Depends(get_db)):
    return login_activity_service.list_activity(db, limit=limit)
