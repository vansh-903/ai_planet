import React, { useState } from "react";
import UploadButton from "./components/UploadButton";
import DocumentDropdown from "./components/DocumentDropdown";
import ChatBox from "./components/ChatBox";
import MessageInput from "./components/MessageInput";
import "./styles/App.css";

function App() {
  const [documents, setDocuments] = useState([]); // Store list of uploaded documents
  const [selectedDocument, setSelectedDocument] = useState(null); // Store selected document
  const [chatHistory, setChatHistory] = useState([]); // Store Q&A history for display

  // Callback for successful PDF upload
  const handleUploadSuccess = (documentId, documentName) => {
    const newDocuments = [...documents, { id: documentId, name: documentName }];
    console.log("Documents after upload:", newDocuments);  // Debug log
    setDocuments(newDocuments);
  };

  const handleQuestionSubmit = async (question) => {
    if (!selectedDocument) {
      alert("Please select a document first.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document_id: selectedDocument, question }),
      });
  
      const data = await response.json();
      setChatHistory([...chatHistory, { question, answer: data.answer }]);
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };
  


  return (
    <div className="app">
      <header className="header">
        <div className="logo">AI Planet</div>
        <UploadButton onUploadSuccess={handleUploadSuccess} />
      </header>
      <DocumentDropdown
        documents={documents}
        selectedDocument={selectedDocument}
        setSelectedDocument={setSelectedDocument}
      />
      <ChatBox chatHistory={chatHistory} />
      <MessageInput onSubmit={handleQuestionSubmit} />
    </div>
  );
}

export default App;
