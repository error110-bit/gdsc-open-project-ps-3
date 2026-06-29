import "../styles/SummaryPanel.css";

function SummaryPanel({ selectedFile }) {
  if (!selectedFile) {
    return (
      <div className="summary-panel">
        <div className="summary-empty">
          <h2>📄 File Information</h2>

          <p>
            Select a file from the graph to view
            <br />
            its metrics and details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="summary-panel">
      <h2 className="summary-title">
        {selectedFile.name}
      </h2>

      <div className="summary-path">
        {selectedFile.path}
      </div>

      <hr className="summary-divider" />

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-card-title">
            Lines of Code
          </div>

          <div className="metric-card-value">
            {selectedFile.loc}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Imports
          </div>

          <div className="metric-card-value">
            {selectedFile.imports}
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
            Loops
          </div>

          <div className="metric-card-value">
            {selectedFile.loops}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Branches
          </div>

          <div className="metric-card-value">
            {selectedFile.branches}
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-card-title">
            Try Blocks
          </div>

          <div className="metric-card-value">
            {selectedFile.tryBlocks}
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