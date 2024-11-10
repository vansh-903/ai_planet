import React from "react";
import "../styles/DocumentDropdown.css";

function DocumentDropdown({ documents, selectedDocument, setSelectedDocument }) {
  console.log("Documents in dropdown:", documents);  // Debug log

  return (
    <div className="document-dropdown-container">
      <select
        className="document-dropdown"
        value={selectedDocument || ""}
        onChange={(e) => {
          const selectedId = Number(e.target.value);  // Convert to number if needed
          console.log("Selected document ID from dropdown:", selectedId);  // Debug log
          setSelectedDocument(selectedId);  // Update state in App.js
        }}
      >
        <option value="" disabled>Select Document</option>
        {documents.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DocumentDropdown;
