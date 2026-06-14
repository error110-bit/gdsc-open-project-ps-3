import GraphCanvas from "../components/GraphCanvas";
import SummaryPanel from "../components/SummaryPanel";

function Dashboard() {
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
        <GraphCanvas />
      </div>

      <div
        style={{
          flex: 1,
          borderLeft: "1px solid #ddd",
        }}
      >
        <SummaryPanel />
      </div>
    </div>
  );
}

export default Dashboard;