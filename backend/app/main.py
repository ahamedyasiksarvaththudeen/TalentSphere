"""FastAPI application entrypoint. Wires together config, database startup,
and every module's routes (Admin & Role Management, Job Requirement
Management, Candidate Profile Management, Duplicate Candidate Detection)."""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.database.init_db import init_db
from app.routes import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title=settings.app_name, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
def read_root():
    return {"service": settings.app_name, "status": "ok"}


app.include_router(api_router, prefix=settings.api_prefix)
