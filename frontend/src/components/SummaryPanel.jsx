import "../styles/SummaryPanel.css";

function Section({ title, icon, children }) {
  if (!children) return null;

  if (Array.isArray(children) && children.length === 0) {
    return null;
  }

  return (
    <div className="ai-section">
      <h3 className="ai-section-title">
        <span>{icon}</span>
        {title}
      </h3>

      {Array.isArray(children) ? (
        <ul className="ai-list">
          {children.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="ai-text">{children}</p>
      )}
    </div>
  );
}

function ComplexityBadge({ level }) {
  const styles = {
    Low: {
      background: "#14532d",
      color: "#86efac",
      border: "#22c55e",
      emoji: "🟢",
    },
    Medium: {
      background: "#78350f",
      color: "#fde68a",
      border: "#f59e0b",
      emoji: "🟡",
    },
    High: {
      background: "#7f1d1d",
      color: "#fca5a5",
      border: "#ef4444",
      emoji: "🔴",
    },
  };

  const current = styles[level] || styles.Low;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "999px",
        background: current.background,
        color: current.color,
        border: `1px solid ${current.border}`,
        fontWeight: 700,
      }}
    >
      {current.emoji} {level}
    </span>
  );
}

function SummaryPanel({ selectedFile, aiSummary }) {
  if (!selectedFile) {
    return (
      <div className="summary-panel">
        <div className="summary-empty">
          <h2>🤖 AI Inspector</h2>

          <p>
            Select a file from the graph
            <br />
            to inspect it with AI.
          </p>
        </div>
      </div>
    );
  }

  const loading =
    typeof aiSummary === "string";

  return (
    <div className="summary-panel">
      <h2 className="summary-title">
        🤖 AI Inspector
      </h2>

      <div className="summary-path">
        <strong>Selected File</strong> 
        <br />
        {selectedFile.name}
      </div>

      <hr className="summary-divider" />

      {loading ? (
        <div className="loading-ai">
          {aiSummary}
        </div>
      ) : (
        <>
          <Section
            icon="📌"
            title="Purpose"
          >
            {aiSummary.purpose}
          </Section>

          <Section
            icon="⚡"
            title="Responsibilities"
          >
            {aiSummary.responsibilities}
          </Section>

          <Section
            icon="🧩"
            title="Important Functions"
          >
            {aiSummary.important_functions}
          </Section>

          <Section
            icon="💡"
            title="Potential Improvements"
          >
            {aiSummary.potential_improvements}
          </Section>

          <div className="ai-section">
            <h3 className="ai-section-title">
              📊 Estimated Complexity
            </h3>

            <ComplexityBadge
              level={aiSummary.estimated_complexity}
            />
          </div>
        </>
      )}

      <hr className="summary-divider" />

      <h3 className="summary-subtitle">
        📈 File Metrics
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