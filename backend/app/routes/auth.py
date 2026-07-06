"""Login / logout endpoints for the Admin & Role Management module."""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.Schemas.auth import LoginRequest, Token
from app.services import auth_service

router = APIRouter(prefix="/auth", tags=["Admin & Role Management - Auth"])


@router.post("/login", response_model=Token)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    token = auth_service.authenticate(db, email=payload.email, password=payload.password)
    return Token(access_token=token)


@router.post("/logout")
def logout():
    """JWTs are stateless, so logout is a client-side token discard. This
    endpoint exists for API-contract completeness with the Admin epic."""
    return {"detail": "Logged out"}
