import { Handle, Position } from "reactflow";

function FileNode({ data }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        minWidth: "150px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
      />

      <h4 style={{ margin: "0 0 10px 0" }}>
        {data.name}
      </h4>

      <p style={{ margin: "4px 0" }}>
        LOC: {data.loc}
      </p>

      <p style={{ margin: "4px 0" }}>
        Imports: {data.imports}
      </p>

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}

export default FileNode;