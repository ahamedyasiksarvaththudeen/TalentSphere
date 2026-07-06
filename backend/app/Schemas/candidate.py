"""Schemas for the Candidate Profile Management module."""

from datetime import datetime

from pydantic import BaseModel, EmailStr

from app.Schemas.common import ORMBase


class CandidateBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: str = ""
    location: str = ""
    applied_job_id: int | None = None


class CandidateCreate(CandidateBase):
    pass


class CandidateUpdate(BaseModel):
    full_name: str | None = None
    phone: str | None = None
    location: str | None = None
    applied_job_id: int | None = None
    ai_score: float | None = None
    matching_score: float | None = None


class CandidateFinalStatusUpdate(BaseModel):
    final_selection_status: str


class CandidateScreeningStatusUpdate(BaseModel):
    screening_status: str


class CandidateInterviewStatusUpdate(BaseModel):
    interview_status: str


class RecruiterNoteCreate(BaseModel):
    author: str
    note: str


class RecruiterNoteRead(ORMBase):
    id: int
    author: str
    note: str
    created_at: datetime


class CandidateFeedbackCreate(BaseModel):
    recommendation: str
    submitted_by: str
    note: str = ""


class CandidateFeedbackRead(ORMBase):
    id: int
    recommendation: str
    submitted_by: str
    note: str
    created_at: datetime


class CandidateRead(CandidateBase, ORMBase):
    id: int
    resume_file_path: str | None
    resume_sha256: str | None
    parsed_resume: dict
    ai_score: float | None
    matching_score: float | None
    screening_status: str
    interview_status: str
    final_selection_status: str
    is_archived: bool
    created_at: datetime
    notes: list[RecruiterNoteRead] = []
    feedback_entries: list[CandidateFeedbackRead] = []
