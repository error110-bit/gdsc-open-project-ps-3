from fastapi import APIRouter

from app.models.repository import RepositoryRequest
from app.services.repository_analyzer import analyze_repository
from app.services.graph_builder import build_graph

router = APIRouter()


@router.post("/scan")
def scan(request: RepositoryRequest):
    analyzed_files = analyze_repository(
        path=request.path,
        max_files=request.max_files,
        ignore_migrations=request.ignore_migrations,
        ignore_tests=request.ignore_tests,
    )

    total_loc = sum(file["metrics"]["loc"] for file in analyzed_files)
    total_functions = sum(file["metrics"]["functions"] for file in analyzed_files)
    total_classes = sum(file["metrics"]["classes"] for file in analyzed_files)
    total_complexity = sum(file["metrics"]["complexity"] for file in analyzed_files)

    average_complexity = (
        total_complexity / len(analyzed_files)
        if analyzed_files
        else 0
    )

    return {
        "summary": {
            "files": len(analyzed_files),
            "loc": total_loc,
            "functions": total_functions,
            "classes": total_classes,
            "average_complexity": round(average_complexity, 2),
        },
        "files": analyzed_files,
    }


@router.post("/graph")
def graph(request: RepositoryRequest):
    analyzed_files = analyze_repository(
        path=request.path,
        max_files=request.max_files,
        ignore_migrations=request.ignore_migrations,
        ignore_tests=request.ignore_tests,
    )

    graph = build_graph(analyzed_files)

    total_loc = sum(file["metrics"]["loc"] for file in analyzed_files)
    total_functions = sum(file["metrics"]["functions"] for file in analyzed_files)
    total_classes = sum(file["metrics"]["classes"] for file in analyzed_files)
    total_complexity = sum(file["metrics"]["complexity"] for file in analyzed_files)

    average_complexity = (
        total_complexity / len(analyzed_files)
        if analyzed_files
        else 0
    )

    graph["summary"] = {
        "files": len(analyzed_files),
        "loc": total_loc,
        "functions": total_functions,
        "classes": total_classes,
        "average_complexity": round(average_complexity, 2),
    }

    return graph