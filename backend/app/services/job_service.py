"""Job Requirement Management module business logic."""

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.models.job import Job
from app.Schemas.job import JobCreate, JobUpdate
from app.utils.file_storage import save_upload_file


def list_jobs(db: Session, status_filter: str | None = None, department_id: int | None = None) -> list[Job]:
    query = db.query(Job)
    if status_filter:
        query = query.filter(Job.status == status_filter)
    if department_id is not None:
        query = query.filter(Job.department_id == department_id)
    return query.order_by(Job.created_at.desc()).all()


def get_job(db: Session, job_id: int) -> Job:
    job = db.get(Job, job_id)
    if not job:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job requisition not found")
    return job


def create_job(db: Session, payload: JobCreate) -> Job:
    job = Job(**payload.model_dump())
    db.add(job)
    db.commit()
    db.refresh(job)
    return job


def update_job(db: Session, job_id: int, payload: JobUpdate) -> Job:
    job = get_job(db, job_id)
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(job, field, value)
    db.commit()
    db.refresh(job)
    return job


def update_status(db: Session, job_id: int, status_value: str) -> Job:
    job = get_job(db, job_id)
    job.status = status_value
    db.commit()
    db.refresh(job)
    return job


def upload_job_description(db: Session, job_id: int, file: UploadFile) -> Job:
    job = get_job(db, job_id)
    job.jd_file_path = save_upload_file(file, subfolder="job_descriptions")
    db.commit()
    db.refresh(job)
    return job


def delete_job(db: Session, job_id: int) -> None:
    job = get_job(db, job_id)
    db.delete(job)
    db.commit()
