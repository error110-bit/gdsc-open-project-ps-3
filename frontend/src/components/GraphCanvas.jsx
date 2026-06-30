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

  const filteredNodes = nodes.map((node) => {
    const matches =
      searchTerm.trim() === "" ||
      node.data.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return {
      ...node,
      data: {
        ...node.data,
        isSelected: node.id === selectedNodeId,
        isDimmed: !matches,
      },
    };
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ReactFlow
        nodes={filteredNodes}
        edges={edges}
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