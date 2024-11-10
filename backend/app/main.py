from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router  # Make sure this is correctly imported

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the router with the FastAPI app
app.include_router(router)  # Ensure this line is present
