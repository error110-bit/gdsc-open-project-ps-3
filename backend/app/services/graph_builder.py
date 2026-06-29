def build_graph(files):
    nodes = []
    edges = []

    # Maps module name -> relative repository path
    file_lookup = {}

    for file in files:
        module_name = file["name"].rsplit(".", 1)[0]
        file_lookup[module_name] = file["relative_path"]

    # Build nodes
    for file in files:
        nodes.append(
            {
                "id": file["relative_path"],
                "name": file["name"],
                "path": file["path"],
                "relative_path": file["relative_path"],
                "metrics": {
                   **file["metrics"],
                   "imports": len(file["dependencies"]),
                },
            }
        )

    # Build edges
    for file in files:
        source = file["relative_path"]

        for dependency in file["dependencies"]:
            dependency = dependency.split(".")[0]

            if dependency not in file_lookup:
                continue

            target = file_lookup[dependency]

            edges.append(
                {
                    "id": f"{source}->{target}",
                    "source": source,
                    "target": target,
                }
            )

    return {
        "nodes": nodes,
        "edges": edges,
    }