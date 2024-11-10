// frontend/src/services/api.js
export const uploadPDF = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    const response = await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
    return response.json();
  };
  
  export const askQuestion = async (pdfId, question) => {
    const response = await fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pdf_id: pdfId, question }),
    });
    return response.json();
  };
  