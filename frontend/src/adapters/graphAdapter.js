export function adaptGraphData(graphData) {
  const nodes = graphData.nodes.map((node, index) => ({
    id: node.id,
    type: "fileNode",

    position: {
      x: (index % 4) * 250,
      y: Math.floor(index / 4) * 180,
    },

    data: {
      name: node.path.split("/").slice(-2).join("/"),
      path: node.path,
      module: node.module,

      loc: node.metrics.loc,
      imports: node.metrics.imports,
      functions: node.metrics.functions,
      classes: node.metrics.classes,
      loops: node.metrics.loops,
      branches: node.metrics.branches,
      tryBlocks: node.metrics.try_blocks,
      complexity: node.metrics.complexity,
    },
  }));

  const edges = graphData.edges.map((edge, index) => ({
    id: `${edge.source}-${edge.target}-${index}`,
    source: edge.source,
    target: edge.target,
  }));

  return {
    nodes,
    edges,
  };
}