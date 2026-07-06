"""Schemas for the Duplicate Candidate Detection module."""

from datetime import datetime
from typing import Literal

from pydantic import BaseModel

from app.Schemas.common import ORMBase


class DuplicateMatchRead(ORMBase):
    id: int
    candidate_a_id: int
    candidate_b_id: int
    similarity_score: int
    matched_signals: list[str]
    status: str
    created_at: datetime


class DuplicateResolveRequest(BaseModel):
    action: Literal["merge", "keep_separate"]
