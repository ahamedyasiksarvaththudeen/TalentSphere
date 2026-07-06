"""Creates all tables and seeds baseline reference data on startup, so the
API is immediately usable without a separate migration/seed step."""

from app.core.security import hash_password
from app.database.base import Base
from app.database.session import SessionLocal, engine
from app.models import (
    AccountStatusEnum,
    Department,
    JobCategory,
    OrgSetting,
    Permission,
    RoleEnum,
    RolePermission,
    User,
)

DEFAULT_PERMISSIONS = [
    "View candidates",
    "Edit candidates",
    "Run AI screening",
    "Adjust ranking weights",
    "Edit rubrics",
    "Approve rubric changes",
    "View bias audits",
    "Generate offers",
    "Approve offers",
    "Export data & PII",
    "Manage users",
    "View audit log",
]

DEFAULT_DEPARTMENTS = ["Platform", "Design", "Intelligence", "Growth", "Activation", "People & Compliance"]
DEFAULT_JOB_CATEGORIES = ["Engineering", "Design", "Data & ML", "Product"]
DEFAULT_ROLES = [role.value for role in RoleEnum]

DEFAULT_ADMIN_EMAIL = "admin@meridianlabs.com"
DEFAULT_ADMIN_PASSWORD = "ChangeMe123!"


def init_db() -> None:
    """Create all tables and seed baseline reference data. Safe to call on
    every startup — each seed step only inserts rows if the table is empty."""
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        _seed(db)
    finally:
        db.close()


def _seed(db) -> None:
    if not db.query(Department).first():
        db.add_all(Department(name=name) for name in DEFAULT_DEPARTMENTS)

    if not db.query(JobCategory).first():
        db.add_all(JobCategory(name=name) for name in DEFAULT_JOB_CATEGORIES)

    if not db.query(Permission).first():
        db.add_all(Permission(name=name) for name in DEFAULT_PERMISSIONS)
        db.flush()
        for permission in db.query(Permission).all():
            for role in DEFAULT_ROLES:
                db.add(
                    RolePermission(
                        role=role,
                        permission_id=permission.id,
                        allowed=(role == RoleEnum.admin.value),
                    )
                )

    if not db.query(OrgSetting).first():
        db.add(
            OrgSetting(
                name="Meridian Labs",
                domain="meridianlabs.com",
                timezone="America/Chicago (CST)",
                work_week="Mon-Fri",
                currency="USD ($)",
                requisition_approval="Two-step (Hiring manager -> Finance)",
            )
        )

    if not db.query(User).first():
        db.add(
            User(
                full_name="System Administrator",
                email=DEFAULT_ADMIN_EMAIL,
                title="Lead Recruiter",
                hashed_password=hash_password(DEFAULT_ADMIN_PASSWORD),
                role=RoleEnum.admin.value,
                status=AccountStatusEnum.active.value,
                two_factor_enabled=True,
            )
        )

    db.commit()
