const COLUMNS = 5;
const HORIZONTAL_SPACING = 260;
const VERTICAL_SPACING = 190;

export function adaptGraphData(graphData) {
  const nodes = graphData.nodes.map((node, index) => ({
    id: node.id,
    type: "fileNode",

    position: {
      x: (index % COLUMNS) * HORIZONTAL_SPACING,
      y: Math.floor(index / COLUMNS) * VERTICAL_SPACING,
    },

    data: {
      name: node.path.split("/").slice(-2).join("/"),
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
  }));

  const edges = graphData.edges.map((edge, index) => ({
    id: `${edge.source}-${edge.target}-${index}`,
    source: edge.source,
    target: edge.target,

    animated: false,

    style: {
      stroke: "#64748b",
      strokeWidth: 1.5,
    },
  }));

  return {
    nodes,
    edges,
  };
}