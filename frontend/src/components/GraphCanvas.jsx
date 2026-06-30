import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import FileNode from "./FileNode";

const nodeTypes = {
  fileNode: FileNode,
};

function GraphCanvas({
  nodes,
  edges,
  setSelectedFile,
  selectedNodeId,
  setSelectedNodeId,
  searchTerm,
}) {
  const onNodeClick = (_, node) => {
    setSelectedFile(node.data);
    setSelectedNodeId(node.id);
  };

  const filteredNodes = nodes.filter((node) =>
    node.data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const visibleNodeIds = new Set(
    filteredNodes.map((node) => node.id)
  );

  const filteredEdges = edges.filter(
    (edge) =>
      visibleNodeIds.has(edge.source) &&
      visibleNodeIds.has(edge.target)
  );

  const enhancedNodes = filteredNodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      isSelected: node.id === selectedNodeId,
    },
  }));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ReactFlow
        nodes={enhancedNodes}
        edges={filteredEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;