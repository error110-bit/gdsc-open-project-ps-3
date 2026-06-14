import { useState } from "react";

import GraphCanvas from "../components/GraphCanvas";
import SummaryPanel from "../components/SummaryPanel";

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);

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
        <GraphCanvas setSelectedFile={setSelectedFile} />
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