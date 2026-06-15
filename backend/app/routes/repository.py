from fastapi import APIRouter, Query
from app.services.scanner import scan_repository
from app.services.metrics import count_lines
from app.services.dependency_parser import get_dependencies
from app.services.graph_builder import build_graph

router = APIRouter()

@router.get("/scan")
def scan(path: str = Query(...)):

    files = scan_repository(path)

    result = []

    for file in files:

        result.append({
            "name": file["name"],
            "path": file["path"],
            "loc": count_lines(file["path"]),
            "dependencies": get_dependencies(file["path"])
        })

    return result

@router.get("/graph")
def graph(path: str = Query(...)):

    files = scan_repository(path)

    result = []

    for file in files:

        result.append({
            "name": file["name"],
            "path": file["path"],
            "loc": count_lines(file["path"]),
            "dependencies": get_dependencies(file["path"])
        })

    return build_graph(result)