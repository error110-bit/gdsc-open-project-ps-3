import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import FileNode from "./FileNode";

const nodeTypes = {
  fileNode: FileNode,
};


function GraphCanvas({ nodes, edges, setSelectedFile }) {
  const onNodeClick = (event, node) => {
    setSelectedFile(node.data);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
      />
    </div>
  );
}

export default GraphCanvas;