import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import FileNode from "./FileNode";

const nodeTypes = {
  fileNode: FileNode,
};

const nodes = [
  {
    id: "1",
    type: "fileNode",
    position: {
      x: 100,
      y: 100,
    },
    data: {
      name: "main.py",
      loc: 245,
      imports: 8,
    },
  },

  {
    id: "2",
    type: "fileNode",
    position: {
      x: 450,
      y: 100,
    },
    data: {
      name: "db.py",
      loc: 120,
      imports: 3,
    },
  },

  {
    id: "3",
    type: "fileNode",
    position: {
      x: 275,
      y: 300,
    },
    data: {
      name: "auth.py",
      loc: 180,
      imports: 5,
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
];

function GraphCanvas() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

export default GraphCanvas;