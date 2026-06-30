import "../styles/SummaryPanel.css";

function SummaryPanel({ selectedFile, aiSummary }) {
  if (!selectedFile) {
    return (
      <div className="summary-panel">
        <div className="summary-empty">
          <h2>🤖 AI Inspector</h2>

          <p>
            Select a file from the graph to generate an
            AI explanation of the file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="summary-panel">
      <h2 className="summary-title">
        🤖 AI Inspector
      </h2>

      <div className="summary-path">
        <strong>File</strong>
        <br />
        {selectedFile.name}
      </div>

      <hr className="summary-divider" />

      <div
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: 1.7,
          fontSize: "14px",
        }}
      >
        {aiSummary}
      </div>

      <hr className="summary-divider" />

      <h3
        style={{
          marginBottom: "15px",
        }}
      >
        File Metrics
      </h3>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-card-title">
            LOC
          </div>

          <div className="metric-card-value">
            {selectedFile.loc}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Functions
          </div>

          <div className="metric-card-value">
            {selectedFile.functions}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Classes
          </div>

          <div className="metric-card-value">
            {selectedFile.classes}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Complexity
          </div>

          <div className="metric-card-value">
            {selectedFile.complexity}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPanel;