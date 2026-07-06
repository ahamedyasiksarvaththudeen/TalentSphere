"""SHA-256 hashing helpers used by the Duplicate Candidate Detection module
to catch the same resume file being uploaded under a different profile."""

import hashlib
from pathlib import Path


def sha256_of_file(path: str | Path, chunk_size: int = 8192) -> str:
    digest = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            digest.update(chunk)
    return digest.hexdigest()


def sha256_of_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()
