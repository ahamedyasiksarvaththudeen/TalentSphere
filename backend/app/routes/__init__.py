"""Combines every module's router into a single `api_router` that main.py
mounts under the configured API prefix."""

from fastapi import APIRouter

from app.routes import (
    auth,
    candidates,
    departments,
    duplicates,
    job_categories,
    jobs,
    login_activity,
    org_settings,
    permissions,
    users,
)

api_router = APIRouter()

# Admin & Role Management
api_router.include_router(auth.router)
api_router.include_router(users.router)
api_router.include_router(departments.router)
api_router.include_router(job_categories.router)
api_router.include_router(permissions.router)
api_router.include_router(login_activity.router)
api_router.include_router(org_settings.router)

# Job Requirement Management
api_router.include_router(jobs.router)

# Candidate Profile Management
api_router.include_router(candidates.router)

# Duplicate Candidate Detection
api_router.include_router(duplicates.router)
