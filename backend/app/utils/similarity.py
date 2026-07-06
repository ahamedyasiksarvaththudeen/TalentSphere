"""Text similarity helpers used by the Duplicate Candidate Detection module
to flag "similar profiles" (Epic 4: Sentence-BERT similarity check).

Uses sentence-transformers when the optional dependency is installed, and
transparently falls back to difflib's SequenceMatcher otherwise, so the API
keeps working without the heavy ML dependency installed.
"""

from difflib import SequenceMatcher

_model = None
_model_checked = False


def _get_model():
    """Lazily load the Sentence-BERT model. Returns None if the optional
    `sentence-transformers` package isn't installed."""
    global _model, _model_checked
    if _model_checked:
        return _model

    _model_checked = True
    try:
        from sentence_transformers import SentenceTransformer

        _model = SentenceTransformer("all-MiniLM-L6-v2")
    except Exception:
        _model = None
    return _model


def text_similarity(a: str, b: str) -> float:
    """Return a 0-100 similarity score between two strings."""
    a = (a or "").strip()
    b = (b or "").strip()
    if not a or not b:
        return 0.0

    model = _get_model()
    if model is not None:
        import numpy as np

        vec_a, vec_b = model.encode([a, b])
        cosine = float(np.dot(vec_a, vec_b) / (np.linalg.norm(vec_a) * np.linalg.norm(vec_b) + 1e-9))
        return max(0.0, min(100.0, cosine * 100))

    return SequenceMatcher(None, a.lower(), b.lower()).ratio() * 100


def profile_similarity(name_a: str, title_a: str, name_b: str, title_b: str) -> float:
    """Blend name and current-title similarity into a single 'similar
    profile' score used by the duplicate-detection service."""
    name_score = text_similarity(name_a, name_b)
    title_score = text_similarity(title_a, title_b)
    return round(0.6 * name_score + 0.4 * title_score, 1)
