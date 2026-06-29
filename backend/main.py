from fastapi import FastAPI
from app.routes.repository import router
from app.routes.summary import router as summary_router

app = FastAPI()

app.include_router(router)
app.include_router(summary_router)

@app.get("/")
def home():
    return {"message": "Backend is running!"}
    