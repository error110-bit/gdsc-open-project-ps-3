import { useState } from "react";

import GraphCanvas from "../components/GraphCanvas";
import SummaryPanel from "../components/SummaryPanel";

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const {nodes , setNodes} = useState([
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
]);

const {edges, setEdges} = useState([
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
]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 3,
        }}
      >
        <GraphCanvas 
         nodes = {nodes} 
         edges = {edges}
         selectedNodeId={selectedNodeId}
         setSelectedNodeId={setSelectedNodeId}
         setSelectedFile={setSelectedFile} />
      </div>

      <div
        style={{
          flex: 1,
          borderLeft: "1px solid #ddd",
        }}
      >
        <SummaryPanel selectedFile={selectedFile} />
      </div>
    </div>
  );
}

export default Dashboard;