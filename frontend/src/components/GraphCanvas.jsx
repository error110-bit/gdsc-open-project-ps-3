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

  const displayNodes = nodes.map((node) => {
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
        nodes={displayNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        minZoom={0.2}
        maxZoom={2}
        defaultViewport={{
          x: 0,
          y: 0,
          zoom: 0.8,
        }}
      >
        <Background
          gap={32}
          size={1.2}
          color="#1f2937"
        />

        <MiniMap
          pannable
          zoomable
          maskColor = "rgba(15,23,42,.65)"
          style={{
            background: "#111827",
            border: "1px solid #334155",
            borderRadius: 12,
          }}
          nodeColor={() => "#3b82f6"}
        />

        <Controls position='bottom-left'showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;