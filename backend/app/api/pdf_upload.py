import os
from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.pdf_processing import extract_text_from_pdf

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.nlp_processing import generate_answer

router = APIRouter()

# In-memory storage for extracted PDF content
pdf_text_storage = {}

class QuestionRequest(BaseModel):
    document_id: int
    question: str
@router.post("/ask")
async def ask_question(request: QuestionRequest):
    # Simulate fetching document text and answering the question
    answer = f"Simulated answer for document ID {request.document_id}"
    return {"answer": answer}

async def upload_pdf(file: UploadFile = File(...)):
    # Check if the uploaded file is a PDF
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="File must be a PDF.")
    
    # Define the path to save the uploaded PDF
    directory = "app/storage/pdfs"
    file_path = os.path.join(directory, file.filename)
    
    # Check if the directory exists, if not, create it
    os.makedirs(directory, exist_ok=True)

    # Save the file to the specified directory
    with open(file_path, "wb") as f:
        f.write(await file.read())
    
    # Extract text content from the saved PDF
    text_content = extract_text_from_pdf(file_path)
    
    # Generate a unique document ID (using length of storage as a simple method)
    document_id = len(pdf_text_storage) + 1
    
    # Store the extracted text in the in-memory dictionary with the document ID as the key
    pdf_text_storage[document_id] = text_content
    
    return {"status": "success", "document_id": document_id}
