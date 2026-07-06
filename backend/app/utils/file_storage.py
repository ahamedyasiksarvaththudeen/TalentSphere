"""Local-disk file storage for uploaded resumes and job description
documents. Swap this out for S3/Azure Blob/etc. in production by changing
only this module."""

import shutil
import uuid
from pathlib import Path

from fastapi import UploadFile

from app.core.config import settings


def _ensure_dir(subfolder: str) -> Path:
    directory = Path(settings.upload_dir) / subfolder
    directory.mkdir(parents=True, exist_ok=True)
    return directory


def save_upload_file(upload_file: UploadFile, subfolder: str) -> str:
    """Persist an uploaded file to disk under a random name and return its
    path (relative to the process working directory)."""
    directory = _ensure_dir(subfolder)
    extension = Path(upload_file.filename or "").suffix
    filename = f"{uuid.uuid4().hex}{extension}"
    destination = directory / filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

    return str(destination)
