"""ORM models backing the Admin & Role Management module: users (HR,
recruiters, hiring managers, admins, ...), departments, job categories,
permissions, login activity and organization settings."""

import enum
from datetime import datetime, timezone

from sqlalchemy import Boolean, DateTime, ForeignKey, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class RoleEnum(str, enum.Enum):
    admin = "Admin"
    recruiter = "Recruiter"
    hiring_manager = "Hiring manager"
    interviewer = "Interviewer"
    coordinator = "Coordinator"
    compliance = "Compliance"


class AccountStatusEnum(str, enum.Enum):
    active = "Active"
    suspended = "Suspended"


class Department(Base):
    __tablename__ = "departments"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    users: Mapped[list["User"]] = relationship(back_populates="department")


class JobCategory(Base):
    __tablename__ = "job_categories"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    title: Mapped[str | None] = mapped_column(String(150), nullable=True)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[str] = mapped_column(String(30), default=RoleEnum.recruiter.value, nullable=False)
    status: Mapped[str] = mapped_column(String(20), default=AccountStatusEnum.active.value, nullable=False)
    department_id: Mapped[int | None] = mapped_column(ForeignKey("departments.id"), nullable=True)
    last_login_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    department: Mapped["Department | None"] = relationship(back_populates="users")
    login_activity: Mapped[list["LoginActivity"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )


class LoginActivity(Base):
    """Records every login attempt (successful or not) for the Admin module's
    login-activity view and basic account-security auditing."""

    __tablename__ = "login_activity"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    email_attempted: Mapped[str] = mapped_column(String(255))
    success: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    user: Mapped["User | None"] = relationship(back_populates="login_activity")


class Permission(Base):
    __tablename__ = "permissions"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    role_links: Mapped[list["RolePermission"]] = relationship(
        back_populates="permission", cascade="all, delete-orphan"
    )


class RolePermission(Base):
    """One cell of the role/permission matrix shown in the Admin module."""

    __tablename__ = "role_permissions"
    __table_args__ = (UniqueConstraint("role", "permission_id", name="uq_role_permission"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    role: Mapped[str] = mapped_column(String(30), nullable=False)
    permission_id: Mapped[int] = mapped_column(ForeignKey("permissions.id"))
    allowed: Mapped[bool] = mapped_column(Boolean, default=False)

    permission: Mapped["Permission"] = relationship(back_populates="role_links")


class OrgSetting(Base):
    """Singleton-style table: exactly one row holds the organization-wide
    settings shown in the Admin module's Org settings tab."""

    __tablename__ = "org_settings"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(150), default="")
    domain: Mapped[str] = mapped_column(String(150), default="")
    timezone: Mapped[str] = mapped_column(String(100), default="")
    work_week: Mapped[str] = mapped_column(String(50), default="Mon-Fri")
    currency: Mapped[str] = mapped_column(String(50), default="USD ($)")
