import os
print("Entered build_graph")

def relative_path_to_module(relative_path):
    module = os.path.splitext(relative_path)[0]
    return module.replace("\\", ".").replace("/", ".")

print("5. Building graph")
def build_graph(files):
    nodes = []
    edges = []

    file_lookup = {}

    for file in files:
        path = file["relative_path"]
        module = relative_path_to_module(path)

        aliases = {
            module,
            module.replace("assigment.drf.", ""),
            module.replace("assigment.drf.apps.", "apps."),
            module.replace("assigment.drf.apps.", ""),
        }

        for alias in aliases:
            file_lookup[alias] = path

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

    seen = set()

    for file in files:
        source = file["relative_path"]

        for dependency in file["dependencies"]:

            if dependency in file_lookup:

                target = file_lookup[dependency]

                if source != target:

                    edge = (source, target)

                    if edge not in seen:
                        seen.add(edge)

                        edges.append(
                            {
                                "id": f"{source}->{target}",
                                "source": source,
                                "target": target,
                            }
                        )
                    print(f"Nodes = {len(nodes)}")
                    print(f"Edges = {len(edges)}")
                    print("Leaving build_graph")

    return {
        "nodes": nodes,
        "edges": edges,
    }
