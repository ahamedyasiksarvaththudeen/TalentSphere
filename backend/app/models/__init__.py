"""ORM models package. Importing this module registers every model class
onto the shared declarative Base/registry, which must happen before the
first query or `Base.metadata.create_all()` call."""

from app.models.candidate import (
    Candidate,
    CandidateFeedback,
    FinalSelectionStatusEnum,
    InterviewStatusEnum,
    RecruiterNote,
    ScreeningStatusEnum,
)
from app.models.duplicate import DuplicateMatch, DuplicateStatusEnum
from app.models.job import Job, JobPriorityEnum, JobStatusEnum
from app.models.user import (
    AccountStatusEnum,
    Department,
    JobCategory,
    LoginActivity,
    OrgSetting,
    Permission,
    RoleEnum,
    RolePermission,
    User,
)

__all__ = [
    "Candidate",
    "CandidateFeedback",
    "FinalSelectionStatusEnum",
    "InterviewStatusEnum",
    "RecruiterNote",
    "ScreeningStatusEnum",
    "DuplicateMatch",
    "DuplicateStatusEnum",
    "Job",
    "JobPriorityEnum",
    "JobStatusEnum",
    "AccountStatusEnum",
    "Department",
    "JobCategory",
    "LoginActivity",
    "OrgSetting",
    "Permission",
    "RoleEnum",
    "RolePermission",
    "User",
]
