# TalentSphere Backend

FastAPI + SQLAlchemy backend for the four modules covered so far: Admin &
Role Management, Job Requirement Management, Candidate Profile Management,
and Duplicate Candidate Detection. It runs against SQLite out of the box
(zero setup) and swaps to Postgres/MySQL by changing one line in `.env`.

## Structure

```
backend/
  app/
    main.py           FastAPI app: CORS, startup DB init, router mounting
    core/
      config.py        Settings loaded from .env (DB url, JWT secret, CORS, ...)
      security.py       Password hashing + JWT create/decode
      dependencies.py    get_current_user / require_roles(*roles) for RBAC
    database/
      base.py           Shared SQLAlchemy declarative Base
      session.py        Engine, SessionLocal, get_db dependency
      init_db.py        Creates tables + seeds default roles/departments/admin
    models/             SQLAlchemy ORM models (one file per module)
    Schemas/            Pydantic request/response schemas (one file per module)
    services/           Business logic — routes call these, nothing else does
    routes/             FastAPI routers — thin, one file per resource
    utils/
      hashing.py         SHA-256 file hashing (duplicate resume detection)
      similarity.py       Sentence-BERT similarity with a difflib fallback
      file_storage.py      Local-disk upload storage
  requirements.txt
  .env
  .gitignore
```

## Module -> endpoint map

**Admin & Role Management** (`/api/v1/auth`, `/users`, `/departments`,
`/job-categories`, `/permissions`, `/login-activity`, `/org-settings`) —
login/logout, user CRUD with role assignment and account status, department
and job-category management, the role/permission matrix, login-activity
history, and organization settings.

**Job Requirement Management** (`/api/v1/jobs`) — create and manage job
title, department, location, experience, salary, required/optional skills,
responsibilities, qualification, vacancy count, priority, job description
document upload, and job status.

**Candidate Profile Management** (`/api/v1/candidates`) — personal details,
resume upload, applied job role, AI/matching scores, screening status,
interview status, recruiter notes, feedback, and final selection status.
Every candidate create or resume upload automatically triggers a duplicate
scan.

**Duplicate Candidate Detection** (`/api/v1/duplicates`) — lists candidate
pairs flagged for a matching email, phone number, resume upload (SHA-256
hash) or similar profile (Sentence-BERT text similarity, with an automatic
difflib fallback if `sentence-transformers` isn't installed), and lets HR
merge the records or keep them separate.

## Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install -r requirements.txt

uvicorn app.main:app --reload
```

The API comes up at `http://localhost:8000`, interactive docs at
`http://localhost:8000/docs`. On first run it creates `talentsphere.db`
(SQLite) and seeds:

- Departments: Platform, Design, Intelligence, Growth, Activation, People & Compliance
- Job categories: Engineering, Design, Data & ML, Product
- The full permission matrix (Admin role granted everything by default)
- A default org settings row
- A default admin login: `admin@meridianlabs.com` / `ChangeMe123!`
  (change this immediately via `PATCH /users/{id}` after your first login)

Requires Python 3.10+.

## Notes / next steps

This scaffold uses `Base.metadata.create_all()` for simplicity — fine for
getting started, but consider adding **Alembic** for real schema migrations
before this goes anywhere near production data. Resume parsing and AI/match
scoring are modeled as plain fields (`parsed_resume`, `ai_score`,
`matching_score`) that a real scoring pipeline can populate; no ML model is
wired in yet beyond the optional similarity check used for duplicate
detection.
