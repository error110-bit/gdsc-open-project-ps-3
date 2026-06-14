function SummaryPanel({ selectedFile }) {
  if (!selectedFile) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>File Information</h2>
        <p>Select a file node.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Information</h2>

      <p>
        <strong>Name:</strong> {selectedFile.name}
      </p>

      <p>
        <strong>LOC:</strong> {selectedFile.loc}
      </p>

      <p>
        <strong>Imports:</strong> {selectedFile.imports}
      </p>
    </div>
  );
}

export default SummaryPanel;