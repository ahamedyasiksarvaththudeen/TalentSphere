"""Job Requirement Management module endpoints: create/manage job title,
department, location, experience, salary, required/optional skills,
responsibilities, qualification, vacancy count, priority, JD document and
job status."""

from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session

from app.core.dependencies import require_roles
from app.database.session import get_db
from app.Schemas.job import JobCreate, JobRead, JobStatusUpdate, JobUpdate
from app.services import job_service

router = APIRouter(prefix="/jobs", tags=["Job Requirement Management"])

_can_manage = Depends(require_roles("Admin", "Recruiter", "Hiring manager"))


@router.get("", response_model=list[JobRead])
def list_jobs(status: str | None = None, department_id: int | None = None, db: Session = Depends(get_db)):
    return job_service.list_jobs(db, status_filter=status, department_id=department_id)


@router.get("/{job_id}", response_model=JobRead)
def get_job(job_id: int, db: Session = Depends(get_db)):
    return job_service.get_job(db, job_id)


@router.post("", response_model=JobRead, dependencies=[_can_manage])
def create_job(payload: JobCreate, db: Session = Depends(get_db)):
    return job_service.create_job(db, payload)


@router.patch("/{job_id}", response_model=JobRead, dependencies=[_can_manage])
def update_job(job_id: int, payload: JobUpdate, db: Session = Depends(get_db)):
    return job_service.update_job(db, job_id, payload)


@router.patch("/{job_id}/status", response_model=JobRead, dependencies=[_can_manage])
def update_status(job_id: int, payload: JobStatusUpdate, db: Session = Depends(get_db)):
    return job_service.update_status(db, job_id, payload.status)


@router.post("/{job_id}/description", response_model=JobRead, dependencies=[_can_manage])
def upload_job_description(job_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    return job_service.upload_job_description(db, job_id, file)


@router.delete("/{job_id}", dependencies=[Depends(require_roles("Admin", "Recruiter"))])
def delete_job(job_id: int, db: Session = Depends(get_db)):
    job_service.delete_job(db, job_id)
    return {"detail": "Job requisition deleted"}
