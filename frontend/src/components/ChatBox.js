import React from "react";
import "../styles/ChatBox.css";

function ChatBox({ chatHistory }) {
    return (
      <div className="chat-box">
        {chatHistory.map((entry, index) => (
          <div key={index} className="chat-entry">
            <strong className="question">Q: {entry.question}</strong>
            <p className="answer">A: {entry.answer}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default ChatBox;
