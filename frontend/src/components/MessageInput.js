import React, { useState } from "react";
import "../styles/MessageInput.css";

function MessageInput({ onSubmit }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question); // Send question to the App component
      setQuestion(""); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;
