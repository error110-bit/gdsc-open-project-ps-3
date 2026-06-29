export function adaptGraphData(graphData) {
  return {
    nodes: graphData.nodes.map((node, index) => ({
      id: node.id,
      type: "fileNode",

      position: {
        x: (index % 4) * 250,
        y: Math.floor(index / 4) * 180,
      },

      data: {
        name: node.name,
        path: node.path,

        loc: node.metrics.loc,
        imports: node.metrics.imports,

        functions: node.metrics.functions,
        classes: node.metrics.classes,
        loops: node.metrics.loops,
        branches: node.metrics.branches,
        tryBlocks: node.metrics.try_blocks,
        complexity: node.metrics.complexity,
      },
    })),

    edges: graphData.edges,
  };
}