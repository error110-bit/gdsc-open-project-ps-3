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

    with open(path, "r", encoding="utf-8", errors="ignore") as file:
        content = file.read()
        MAX_CHARS = 20000
        if len(content) > MAX_CHARS:
            content = content[:MAX_CHARS]
    try:
        summary_text = generate_summary(content)
    except Exception as e:
        print("Gemini Error:", e)
        return {
            "cached": False,
            "summary": {
                "purpose": "AI summary could not be generated.",
                "responsibilities": [],
                "important_functions": [],
                "potential_improvements": [
                    "Gemini API quota exceeded or unavailable"
                ],
                "estimated_complexity": "Unknown"
            }
        }
   
    cache[file_hash] = summary_text

    save_cache(cache)

    return {
        "cached": False,
        "summary": summary_text
    }