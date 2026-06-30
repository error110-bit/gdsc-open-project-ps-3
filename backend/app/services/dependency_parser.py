import ast


def get_dependencies(file_path):
    dependencies = []

    try:
        with open(file_path, "r", encoding="utf-8") as file:
            tree = ast.parse(file.read())

        for node in ast.walk(tree):

            if isinstance(node, ast.Import):
                for alias in node.names:
                    dependencies.append(alias.name)

            elif isinstance(node, ast.ImportFrom):

                if node.module:
                    dependencies.append(node.module)

    except Exception:
        pass

    return list(set(dependencies))