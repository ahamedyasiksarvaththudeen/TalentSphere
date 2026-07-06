"""ORM model backing the Duplicate Candidate Detection module."""

import enum
from datetime import datetime, timezone

from sqlalchemy import JSON, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class DuplicateStatusEnum(str, enum.Enum):
    pending = "Pending"
    merged = "Merged"
    kept_separate = "Kept separate"


class DuplicateMatch(Base):
    """A candidate pair flagged as a possible duplicate, with the signals
    that triggered the match (email, phone, resume upload, similar profile)."""

    __tablename__ = "duplicate_matches"

    id: Mapped[int] = mapped_column(primary_key=True)
    candidate_a_id: Mapped[int] = mapped_column(ForeignKey("candidates.id"))
    candidate_b_id: Mapped[int] = mapped_column(ForeignKey("candidates.id"))
    similarity_score: Mapped[int] = mapped_column(Integer, default=0)
    matched_signals: Mapped[list] = mapped_column(JSON, default=list)
    status: Mapped[str] = mapped_column(String(30), default=DuplicateStatusEnum.pending.value)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    candidate_a: Mapped["Candidate"] = relationship(foreign_keys=[candidate_a_id])
    candidate_b: Mapped["Candidate"] = relationship(foreign_keys=[candidate_b_id])
