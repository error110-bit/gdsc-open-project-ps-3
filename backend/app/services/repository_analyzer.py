from app.services.scanner import scan_repository
from app.services.metrics import analyze_metrics
from app.services.dependency_parser import get_dependencies

print("7. Returning response")
def analyze_repository(
    path,
    max_files=100,
    ignore_migrations=True,
    ignore_tests=True,
):
    scanned_files = scan_repository(
        path=path,
        max_files=max_files,
        ignore_migrations=ignore_migrations,
        ignore_tests=ignore_tests,
    )

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
print("6. Graph complete")