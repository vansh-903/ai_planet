# app/api/routes.py

from fastapi import APIRouter
from .pdf_upload import upload_pdf
from .question_answering import ask_question

router = APIRouter()

# Register the endpoints with the router
router.post("/upload")(upload_pdf)
router.post("/ask")(ask_question)
