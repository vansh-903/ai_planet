# app/services/nlp_processing.py

# This is a mock NLP processing function.
# In a production environment, integrate with LangChain or LlamaIndex.

def generate_answer(question: str, text_content: str) -> str:
    # Simple mock-up answer generation by checking if the question exists in text
    if question.lower() in text_content.lower():
        return "The document contains information about: " + question
    else:
        return "No relevant information found in the document."
