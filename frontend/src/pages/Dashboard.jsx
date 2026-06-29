import { useState } from "react";

import GraphCanvas from "../components/GraphCanvas";
import SummaryPanel from "../components/SummaryPanel";

import { getRepositoryGraph } from "../api/repositoryApi";
import { adaptGraphData } from "../adapters/graphAdapter";

import "../styles/Dashboard.css";

function Dashboard() {
  const [repositoryPath, setRepositoryPath] = useState("");

  const [maxFiles, setMaxFiles] = useState(100);
  const [ignoreMigrations, setIgnoreMigrations] = useState(true);
  const [ignoreTests, setIgnoreTests] = useState(true);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [repositorySummary, setRepositorySummary] = useState(null);

  async function handleAnalyzeRepository() {
    if (!repositoryPath.trim()) {
      setError("Please enter a repository path.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const backendGraph = await getRepositoryGraph({
        repositoryPath,
        maxFiles,
        ignoreMigrations,
        ignoreTests,
      });

      setRepositorySummary(backendGraph.summary);

      const graph = adaptGraphData(backendGraph);

      setNodes(graph.nodes);
      setEdges(graph.edges);

      setSelectedFile(null);
      setSelectedNodeId(null);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze repository.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Repository Visualizer
        </h1>

        <p className="dashboard-subtitle">
          Analyze repository structure, metrics, and dependencies.
        </p>

        <div className="toolbar">
          <input
            type="text"
            placeholder="Enter repository path..."
            value={repositoryPath}
            onChange={(e) => setRepositoryPath(e.target.value)}
          />

          <input
            type="number"
            min="1"
            value={maxFiles}
            onChange={(e) => setMaxFiles(Number(e.target.value))}
          />

          <label>
            <input
              type="checkbox"
              checked={ignoreMigrations}
              onChange={(e) => setIgnoreMigrations(e.target.checked)}
            />
            Ignore Migrations
          </label>

          <label>
            <input
              type="checkbox"
              checked={ignoreTests}
              onChange={(e) => setIgnoreTests(e.target.checked)}
            />
            Ignore Tests
          </label>

          <button
            onClick={handleAnalyzeRepository}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Repository"}
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            color: "red",
            padding: "12px 20px",
            background: "#fef2f2",
          }}
        >
          {error}
        </div>
      )}

      {repositorySummary && (
        <div className="summary-bar">
          <div className="summary-card">
            📁 Files: {repositorySummary.files}
          </div>

          <div className="summary-card">
            📄 LOC: {repositorySummary.loc}
          </div>

          <div className="summary-card">
            ⚙️ Functions: {repositorySummary.functions}
          </div>

          <div className="summary-card">
            🏛 Classes: {repositorySummary.classes}
          </div>

          <div className="summary-card">
            🧠 Avg Complexity:{" "}
            {repositorySummary.average_complexity}
          </div>
        </div>
      )}

      <div className="dashboard-content">
        <div className="graph-section">
          <GraphCanvas
            nodes={nodes}
            edges={edges}
            selectedNodeId={selectedNodeId}
            setSelectedNodeId={setSelectedNodeId}
            setSelectedFile={setSelectedFile}
          />
        </div>

        <div className="sidebar">
          <SummaryPanel selectedFile={selectedFile} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;