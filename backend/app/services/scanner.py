import os

SUPPORTED_EXTENSIONS = {
    ".py",
}

IGNORED_DIRECTORIES = {
    ".git",
    "node_modules",
    "__pycache__",
    "venv",
    ".venv",
    "dist",
    "build",
}


def scan_repository(path):
    files = []

    for root, dirs, filenames in os.walk(path):
        # Prevent os.walk from descending into ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRECTORIES]

        for filename in filenames:

            if os.path.splitext(filename)[1] not in SUPPORTED_EXTENSIONS:
                 continue

            absolute_path = os.path.join(root, filename)

            relative_path = os.path.relpath(
                absolute_path,
                path,
            )

            files.append(
                {
                    "name": filename,
                    "path": absolute_path,
                    "relative_path": relative_path,
                }
            )

    return files