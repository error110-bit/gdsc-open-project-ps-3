from fastapi import APIRouter

from app.models.repository import RepositoryRequest

from app.services.repository_analyzer import analyze_repository
from app.services.graph_builder import build_graph

router = APIRouter()

@router.post("/scan")
def scan(request: RepositoryRequest):

    return analyze_repository(request.path)

@router.post("/graph")
def graph(request: RepositoryRequest):

    analyzed_files = analyze_repository(request.path)

    return build_graph(analyzed_files)

