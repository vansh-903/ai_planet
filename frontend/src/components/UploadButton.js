import React from "react";
import axios from "axios";

function UploadButton({ onUploadSuccess }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/upload", formData);
      // Ensure both document ID and file name are passed back to App component
      onUploadSuccess(response.data.document_id, file.name);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <button onClick={() => document.getElementById('fileInput').click()}>
        Upload PDF
      </button>
      <input id="fileInput" type="file" onChange={handleFileUpload} hidden />
    </div>
  );
}

export default UploadButton;
