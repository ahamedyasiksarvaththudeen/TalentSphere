"""Login authentication for the Admin & Role Management module."""

from datetime import datetime, timezone

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import create_access_token, verify_password
from app.models.user import AccountStatusEnum, LoginActivity, User


def authenticate(
    db: Session,
    email: str,
    password: str,
    ip_address: str | None,
    device: str | None,
) -> str:
    """Verify credentials, record the attempt in the login-activity log, and
    return a JWT access token on success."""
    user = db.query(User).filter(User.email == email).first()
    success = bool(user and verify_password(password, user.hashed_password))

    db.add(
        LoginActivity(
            user_id=user.id if user else None,
            email_attempted=email,
            success=success,
            ip_address=ip_address,
            device=device,
        )
    )

    if not user or not success:
        db.commit()
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")

    if user.status == AccountStatusEnum.suspended.value:
        db.commit()
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is suspended")

    user.last_login_at = datetime.now(timezone.utc)
    db.commit()

    return create_access_token(subject=user.email, extra_claims={"role": user.role})
