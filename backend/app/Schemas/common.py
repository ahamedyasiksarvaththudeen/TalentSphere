"""Shared base classes and small reusable schemas."""

from pydantic import BaseModel, ConfigDict


class ORMBase(BaseModel):
    """Mixin enabling `Model.model_validate(orm_instance)` for read schemas."""

    model_config = ConfigDict(from_attributes=True)


class Message(BaseModel):
    detail: str
