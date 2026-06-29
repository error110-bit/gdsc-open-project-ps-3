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
  selectedNodeId,
  setSelectedNodeId,
  setSelectedFile,
}) {
  const onNodeClick = (_, node) => {
    setSelectedNodeId(node.id);
    setSelectedFile(node.data);
  };

  const enhancedNodes = nodes.map((node) => ({
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
        height: "100vh",
      }}
    >
      <ReactFlow
        nodes={enhancedNodes}
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