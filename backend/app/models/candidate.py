"""ORM models backing the Candidate Profile Management module: candidate
records, recruiter notes and interview feedback."""

import enum
from datetime import datetime, timezone

from sqlalchemy import JSON, Boolean, DateTime, Float, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class ScreeningStatusEnum(str, enum.Enum):
    not_screened = "Not screened"
    screened = "Screened"


class InterviewStatusEnum(str, enum.Enum):
    not_scheduled = "Not scheduled"
    in_progress = "In progress"
    completed = "Completed"


class FinalSelectionStatusEnum(str, enum.Enum):
    pending = "Pending"
    selected = "Selected"
    not_selected = "Not selected"


class Candidate(Base):
    __tablename__ = "candidates"

    id: Mapped[int] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    email: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String(50), default="")
    location: Mapped[str] = mapped_column(String(200), default="")

    resume_file_path: Mapped[str | None] = mapped_column(String(400), nullable=True)
    # SHA-256 of the uploaded resume file, used by the Duplicate Candidate
    # Detection module to catch the same file uploaded under a new profile.
    resume_sha256: Mapped[str | None] = mapped_column(String(64), index=True, nullable=True)
    parsed_resume: Mapped[dict] = mapped_column(JSON, default=dict)

    applied_job_id: Mapped[int | None] = mapped_column(ForeignKey("jobs.id"), nullable=True)

    ai_score: Mapped[float | None] = mapped_column(Float, nullable=True)
    matching_score: Mapped[float | None] = mapped_column(Float, nullable=True)

    screening_status: Mapped[str] = mapped_column(String(30), default=ScreeningStatusEnum.not_screened.value)
    interview_status: Mapped[str] = mapped_column(String(30), default=InterviewStatusEnum.not_scheduled.value)
    final_selection_status: Mapped[str] = mapped_column(
        String(30), default=FinalSelectionStatusEnum.pending.value
    )

    # Set true when merged into another candidate record (see DuplicateMatch)
    # instead of hard-deleting, so history/audit trails stay intact.
    is_archived: Mapped[bool] = mapped_column(Boolean, default=False)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    job: Mapped["Job | None"] = relationship(back_populates="candidates")
    notes: Mapped[list["RecruiterNote"]] = relationship(
        back_populates="candidate", cascade="all, delete-orphan"
    )
    feedback_entries: Mapped[list["CandidateFeedback"]] = relationship(
        back_populates="candidate", cascade="all, delete-orphan"
    )


class RecruiterNote(Base):
    __tablename__ = "recruiter_notes"

    id: Mapped[int] = mapped_column(primary_key=True)
    candidate_id: Mapped[int] = mapped_column(ForeignKey("candidates.id"))
    author: Mapped[str] = mapped_column(String(150))
    note: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    candidate: Mapped["Candidate"] = relationship(back_populates="notes")


class CandidateFeedback(Base):
    __tablename__ = "candidate_feedback"

    id: Mapped[int] = mapped_column(primary_key=True)
    candidate_id: Mapped[int] = mapped_column(ForeignKey("candidates.id"))
    recommendation: Mapped[str] = mapped_column(String(50))
    submitted_by: Mapped[str] = mapped_column(String(150))
    note: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    candidate: Mapped["Candidate"] = relationship(back_populates="feedback_entries")
