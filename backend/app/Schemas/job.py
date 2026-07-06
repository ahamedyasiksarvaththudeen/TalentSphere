"""Schemas for the Job Requirement Management module."""

from datetime import datetime

from pydantic import BaseModel

from app.Schemas.common import ORMBase


class JobBase(BaseModel):
    title: str
    department_id: int | None = None
    category_id: int | None = None
    location: str = ""
    experience: str = ""
    salary_min: float | None = None
    salary_max: float | None = None
    required_skills: list[str] = []
    optional_skills: list[str] = []
    responsibilities: list[str] = []
    qualification: list[str] = []
    vacancy_count: int = 1
    priority: str = "Medium"
    hiring_manager: str = ""
    status: str = "Active"


class JobCreate(JobBase):
    pass


class JobUpdate(BaseModel):
    title: str | None = None
    department_id: int | None = None
    category_id: int | None = None
    location: str | None = None
    experience: str | None = None
    salary_min: float | None = None
    salary_max: float | None = None
    required_skills: list[str] | None = None
    optional_skills: list[str] | None = None
    responsibilities: list[str] | None = None
    qualification: list[str] | None = None
    vacancy_count: int | None = None
    priority: str | None = None
    hiring_manager: str | None = None


class JobStatusUpdate(BaseModel):
    status: str


class JobRead(JobBase, ORMBase):
    id: int
    jd_file_path: str | None
    created_at: datetime
    updated_at: datetime
