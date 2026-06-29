from app.services.scanner import scan_repository
from app.services.metrics import analyze_metrics
from app.services.dependency_parser import get_dependencies


def analyze_repository(path):
    """
    Scans a repository and enriches each file with
    analysis metadata required by the graph builder.
    """

    scanned_files = scan_repository(path)

    analyzed_files = []

    for file in scanned_files:

        metrics = analyze_metrics(file["path"])

        analyzed_files.append(
            {
                "name": file["name"],
                "path": file["path"],
                "relative_path": file["relative_path"],
                "metrics": metrics,
                "dependencies": get_dependencies(file["path"]),
            }
        )
        return analyzed_files