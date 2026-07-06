"""Schemas for the Admin & Role Management module: users, departments, job
categories, permissions, login activity, organization settings."""

from datetime import datetime

from pydantic import BaseModel, EmailStr, Field

from app.Schemas.common import ORMBase


class DepartmentBase(BaseModel):
    name: str


class DepartmentCreate(DepartmentBase):
    pass


class DepartmentRead(DepartmentBase, ORMBase):
    id: int


class JobCategoryBase(BaseModel):
    name: str


class JobCategoryCreate(JobCategoryBase):
    pass


class JobCategoryRead(JobCategoryBase, ORMBase):
    id: int


class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    title: str | None = None
    role: str = "Recruiter"
    department_id: int | None = None


class UserCreate(UserBase):
    password: str = Field(min_length=8)


class UserUpdateRole(BaseModel):
    role: str


class UserUpdateStatus(BaseModel):
    status: str


class UserRead(ORMBase):
    id: int
    full_name: str
    email: EmailStr
    title: str | None
    role: str
    status: str
    department_id: int | None
    last_login_at: datetime | None


class LoginActivityRead(ORMBase):
    id: int
    email_attempted: str
    success: bool
    created_at: datetime


class PermissionRead(ORMBase):
    id: int
    name: str


class RolePermissionRead(BaseModel):
    role: str
    permission_id: int
    permission_name: str
    allowed: bool


class RolePermissionUpdate(BaseModel):
    role: str
    permission_id: int
    allowed: bool


class OrgSettingRead(ORMBase):
    id: int
    name: str
    domain: str
    timezone: str
    work_week: str
    currency: str


class OrgSettingUpdate(BaseModel):
    name: str | None = None
    domain: str | None = None
    timezone: str | None = None
    work_week: str | None = None
    currency: str | None = None
