function SummaryPanel({ selectedFile }) {
  if (!selectedFile) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>File Information</h2>
        <p>Select a file to view its details.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{selectedFile.name}</h2>

      <p>
        <strong>Path:</strong> {selectedFile.path}
      </p>

      <hr />

      <h3>Metrics</h3>

      <p>
        <strong>Lines of Code:</strong> {selectedFile.loc}
      </p>

      <p>
        <strong>Imports:</strong> {selectedFile.imports}
      </p>

      <p>
        <strong>Functions:</strong> {selectedFile.functions}
      </p>

      <p>
        <strong>Classes:</strong> {selectedFile.classes}
      </p>

      <p>
        <strong>Loops:</strong> {selectedFile.loops}
      </p>

      <p>
        <strong>Branches:</strong> {selectedFile.branches}
      </p>

      <p>
        <strong>Try Blocks:</strong> {selectedFile.tryBlocks}
      </p>

      <p>
        <strong>Complexity Score:</strong> {selectedFile.complexity}
      </p>
    </div>
  );
}

export default SummaryPanel;