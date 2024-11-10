# app/api/question_answering.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.nlp_processing import generate_answer

router = APIRouter()

# Dummy in-memory storage (from pdf_upload.py)
pdf_text_storage = {}  # This should be shared across files in production

# Define a data model for the request body
class QuestionRequest(BaseModel):
    document_id: int
    question: str

async def ask_question(request: QuestionRequest):
    # Retrieve the document content using the document ID
    if request.document_id not in pdf_text_storage:
        raise HTTPException(status_code=404, detail="Document not found.")
    
    # Fetch the text content associated with the document ID
    text_content = pdf_text_storage[request.document_id]
    
    # Use the NLP service to generate an answer based on the question and document content
    answer = generate_answer(request.question, text_content)
    
    return {"answer": answer}
