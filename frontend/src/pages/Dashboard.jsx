import { useEffect, useState } from "react";

import GraphCanvas from "../components/GraphCanvas";
import SummaryPanel from "../components/SummaryPanel";

import { getRepositoryGraph } from "../api/repositoryApi";
import { adaptGraphData } from "../adapters/graphAdapter";

function Dashboard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    async function loadGraph() {
      try {
        const backendGraph = await getRepositoryGraph(
          "/home/falcon/b29-drf-assgn_maggie_aqua"
        );

        const graph = adaptGraphData(backendGraph);

        setNodes(graph.nodes);
        setEdges(graph.edges);
      } catch (error) {
        console.error("Failed to load repository graph:", error);
      }
    }

    loadGraph();
  }, []);

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
          nodes={nodes}
          edges={edges}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
          setSelectedFile={setSelectedFile}
        />
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