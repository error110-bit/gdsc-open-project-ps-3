import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import FileNode from "./FileNode";

const nodeTypes = {
  fileNode: FileNode,
};


function GraphCanvas({ nodes, edges, setSelectedFile, selectedNodeId, setSelectedNodeId }) {
  const onNodeClick = (event, node) => {
    setSelectedFile(node.data);
    setSelectedNodeId(node.id);
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
      />
    </div>
  );
}

export default GraphCanvas;