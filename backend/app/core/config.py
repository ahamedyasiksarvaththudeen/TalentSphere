"""Application configuration, loaded from environment variables / a .env file."""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "TalentSphere API"
    api_prefix: str = "/api/v1"

    # SQLAlchemy connection string. Defaults to a local SQLite file so the API
    # runs out of the box; point this at Postgres/MySQL in production.
    database_url: str = "sqlite:///./talentsphere.db"

    # JWT auth
    secret_key: str = "change-me-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    # File uploads (resumes, job description documents)
    upload_dir: str = "uploads"
    max_upload_size_mb: int = 10

    # Comma-separated list of allowed frontend origins for CORS
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"

    # Duplicate Candidate Detection module: minimum score (0-100) before a
    # pair of candidates is surfaced to HR as a possible duplicate
    duplicate_similarity_threshold: int = 70

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
