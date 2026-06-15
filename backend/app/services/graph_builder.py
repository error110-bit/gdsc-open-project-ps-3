def build_graph(files):

    nodes = []
    edges = []

    for file in files:

        nodes.append({
            "id": file["name"],
            "data": {
                "label": file["name"],
                "loc": file["loc"]
            }
        })

        for dependency in file["dependencies"]:

            edges.append({
                "source": file["name"],
                "target": dependency
            })

    return {
        "nodes": nodes,
        "edges": edges
    }