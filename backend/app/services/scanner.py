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

IGNORED_FILES = {
    "__init__.py",
    "apps.py",
}



def scan_repository(
    path,
    max_files=100,
    ignore_migrations=True,
    ignore_tests=True,
):
    files = []

    for root, dirs, filenames in os.walk(path):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRECTORIES]

        if ignore_migrations and "migrations" in root.split(os.sep):
            continue

        if ignore_tests:
            folder_names = root.lower().split(os.sep)

            if any(
                name.startswith("test")
                for name in folder_names
            ):
                continue

        for filename in filenames:
            if os.path.splitext(filename)[1] not in SUPPORTED_EXTENSIONS:
                continue

            if filename in IGNORED_FILES:
                continue

            if ignore_tests and filename.lower().startswith("test"):
                continue

            absolute_path = os.path.join(root, filename)

            relative_path = os.path.relpath(
                absolute_path,
                path,
            )

            relative_parts = relative_path.split(os.sep)

            module = "Root"

            if "apps" in relative_parts:
                index = relative_parts.index("apps")
                if index + 1 < len(relative_parts):
                    module = relative_parts[index + 1]
            elif len(relative_parts) > 1:
                module = relative_parts[0]

            files.append({
                "name": filename,
                "path": absolute_path,
                "relative_path": relative_path,
                "module": module,
            })

            if len(files) >= max_files:
                return files

    return files