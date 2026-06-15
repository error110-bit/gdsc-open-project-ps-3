from fastapi import APIRouter, Query

from app.services.ai_summary import generate_summary
from app.services.cache_manager import load_cache, save_cache
from app.utils.file_hash import get_file_hash

router = APIRouter()


@router.get("/summary")
def summary(path: str = Query(...)):

    file_hash = get_file_hash(path)

    cache = load_cache()

    if file_hash in cache:
        return {
            "cached": True,
            "summary": cache[file_hash]
        }

    with open(path, "r", encoding="utf-8") as file:
        content = file.read()

    summary_text = generate_summary(content)

    cache[file_hash] = summary_text

    save_cache(cache)

    return {
        "cached": False,
        "summary": summary_text
    }