"""Shared SQLAlchemy declarative base. Every model in app/models imports this
so they all register onto the same metadata/registry."""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass
