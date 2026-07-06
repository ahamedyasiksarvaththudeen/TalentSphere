"""ORM model backing the Job Requirement Management module."""

import enum
from datetime import datetime, timezone

from sqlalchemy import JSON, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class JobPriorityEnum(str, enum.Enum):
    high = "High"
    medium = "Medium"
    low = "Low"


class JobStatusEnum(str, enum.Enum):
    active = "Active"
    on_hold = "On hold"
    closed = "Closed"


class Job(Base):
    __tablename__ = "jobs"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    department_id: Mapped[int | None] = mapped_column(ForeignKey("departments.id"), nullable=True)
    category_id: Mapped[int | None] = mapped_column(ForeignKey("job_categories.id"), nullable=True)
    location: Mapped[str] = mapped_column(String(200), default="")
    experience: Mapped[str] = mapped_column(String(50), default="")
    salary_min: Mapped[float | None] = mapped_column(Float, nullable=True)
    salary_max: Mapped[float | None] = mapped_column(Float, nullable=True)

    # Required vs. optional skills, kept as simple string lists (see Schemas/job.py)
    required_skills: Mapped[list] = mapped_column(JSON, default=list)
    optional_skills: Mapped[list] = mapped_column(JSON, default=list)
    responsibilities: Mapped[list] = mapped_column(JSON, default=list)
    qualification: Mapped[list] = mapped_column(JSON, default=list)

    vacancy_count: Mapped[int] = mapped_column(Integer, default=1)
    priority: Mapped[str] = mapped_column(String(20), default=JobPriorityEnum.medium.value)
    jd_file_path: Mapped[str | None] = mapped_column(String(400), nullable=True)
    status: Mapped[str] = mapped_column(String(20), default=JobStatusEnum.active.value)
    hiring_manager: Mapped[str] = mapped_column(String(150), default="")

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    department: Mapped["Department | None"] = relationship()
    category: Mapped["JobCategory | None"] = relationship()
    candidates: Mapped[list["Candidate"]] = relationship(back_populates="job")
