import ast
import re
import os

print("3. Starting metrics")
def analyze_metrics(file_path):
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as file:
            source = file.read()

        extension = os.path.splitext(file_path)[1].lower()

        # ---------- Python ----------
        if extension == ".py":
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

        # ---------- Generic (JS, Java, C++, etc.) ----------

        loc = len(source.splitlines())

        function_patterns = [
            r"\bfunction\b",
            r"=>",
            r"\bdef\b",
            r"\bfunc\b",
            r"\bvoid\b",
            r"\bpublic\b",
            r"\bprivate\b",
            r"\bprotected\b",
        ]

        class_patterns = [
            r"\bclass\b",
            r"\binterface\b",
            r"\benum\b",
            r"\bstruct\b",
        ]

        loop_patterns = [
            r"\bfor\b",
            r"\bwhile\b",
        ]

        branch_patterns = [
            r"\bif\b",
            r"\bswitch\b",
            r"\bcase\b",
        ]

        try_patterns = [
            r"\btry\b",
            r"\bcatch\b",
        ]

        def count(patterns):
            total = 0
            for pattern in patterns:
                total += len(re.findall(pattern, source))
            return total

        metrics = {
            "loc": loc,
            "functions": count(function_patterns),
            "classes": count(class_patterns),
            "loops": count(loop_patterns),
            "branches": count(branch_patterns),
            "try_blocks": count(try_patterns),
        }

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
print("4. Metrics complete")