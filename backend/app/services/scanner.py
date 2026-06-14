import os

def scan_repository(path):
    files = []

    for root, dirs, filenames in os.walk(path):
        for file in filenames:
            files.append({
                "name": file,
                "path": os.path.join(root, file)
            })

    return files