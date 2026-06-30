import { useMemo } from "react";
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
  const connectedNodes = useMemo(() => {
    if (!selectedNodeId) return new Set();

    const connected = new Set([selectedNodeId]);

    edges.forEach((edge) => {
      if (edge.source === selectedNodeId) {
        connected.add(edge.target);
      }

      if (edge.target === selectedNodeId) {
        connected.add(edge.source);
      }
    });

    return connected;
  }, [selectedNodeId, edges]);

  const displayNodes = nodes.map((node) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      node.data.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const fadedBySearch =
      searchTerm && !matchesSearch;

    const fadedByFocus =
      selectedNodeId &&
      !connectedNodes.has(node.id);

    return {
      ...node,
      data: {
        ...node.data,
        isSelected: node.id === selectedNodeId,
        isDimmed:
          fadedBySearch || fadedByFocus,
      },
    };
  });

  const displayEdges = edges.map((edge) => {
    const highlighted =
      selectedNodeId &&
      (edge.source === selectedNodeId ||
        edge.target === selectedNodeId);

    return {
      ...edge,

      animated: highlighted && !searchTerm,

      style: highlighted
        ? {
            stroke: "#60a5fa",
            strokeWidth: 3,
          }
        : {
            stroke: selectedNodeId
              ? "#334155"
              : "#64748b",
            strokeWidth: selectedNodeId
              ? 1
              : 2,
            opacity: selectedNodeId
              ? 0.15
              : 1,
          },
    };
  });

  const onNodeClick = (_, node) => {
    setSelectedFile(node.data);
    setSelectedNodeId(node.id);
  };

  const onPaneClick = () => {
    setSelectedNodeId(null);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ReactFlow
        nodes={displayNodes}
        edges={displayEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
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
          gap={24}
          size={1}
          color="#334155"
        />

        <MiniMap
          pannable
          zoomable
          style={{
            background: "#111827",
          }}
          nodeColor={() => "#3b82f6"}
        />

        <Controls
          position="bottom-left"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;