import { Handle, Position } from "reactflow";

import "../styles/FileNode.css";

function FileNode({ data }) {
  return (
    <div
      className={`file-node ${data.isSelected ? "selected" : ""}`}
    >
      <Handle
        type="target"
        position={Position.Top}
      />

      <h4
        className="file-name"
        title={data.name}
      >
        {data.name}
      </h4>

      <div className="file-metrics">
        <div className="metric">
          <span className="metric-label">LOC</span>
          <span className="metric-value">{data.loc}</span>
        </div>

        <div className="metric">
          <span className="metric-label">Functions</span>
          <span className="metric-value">{data.functions}</span>
        </div>

        <div className="metric">
          <span className="metric-label">Classes</span>
          <span className="metric-value">{data.classes}</span>
        </div>

        <div className="metric">
          <span className="metric-label">Complexity</span>
          <span className="metric-value">{data.complexity}</span>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}

export default FileNode;