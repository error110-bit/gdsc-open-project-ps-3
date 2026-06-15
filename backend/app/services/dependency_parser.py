import re

def get_dependencies(file_path):
    dependencies = []

    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()

        imports = re.findall(
            r'^\s*(?:from\s+([^\s]+)\s+import|import\s+([^\s]+))',
            content,
            re.MULTILINE
        )

        for imp1, imp2 in imports:
            dependency = imp1 if imp1 else imp2
            dependencies.append(dependency)

    except:
        pass

    return dependencies