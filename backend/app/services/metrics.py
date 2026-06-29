import ast


def analyze_metrics(file_path):
    """
    Analyze a Python source file and return basic code metrics.
    """

    try:
        with open(file_path, "r", encoding="utf-8") as file:
            source = file.read()

        tree = ast.parse(source)

        metrics = {
            "loc": len(source.splitlines()),
            "functions": 0,
            "classes": 0,
            "loops": 0,
            "branches": 0,
            "try_blocks": 0,
        }

        for node in ast.walk(tree):

            if isinstance(node, ast.FunctionDef):
                metrics["functions"] += 1

            elif isinstance(node, ast.ClassDef):
                metrics["classes"] += 1

            elif isinstance(node, (ast.For, ast.While)):
                metrics["loops"] += 1

            elif isinstance(node, ast.If):
                metrics["branches"] += 1

            elif isinstance(node, ast.Try):
                metrics["try_blocks"] += 1

        metrics["complexity"] = (
            metrics["functions"]
            + metrics["classes"] * 2
            + metrics["loops"] * 2
            + metrics["branches"]
            + metrics["try_blocks"]
        )

        return metrics

    except Exception:
        return {
            "loc": 0,
            "functions": 0,
            "classes": 0,
            "loops": 0,
            "branches": 0,
            "try_blocks": 0,
            "complexity": 0,
        }