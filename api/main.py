from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fatigueWebWrapper.Payload import FatiguePayload
from fatigueWebWrapper.wrapper import FatigueWebWrapper

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["POST","GET"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to engineering toolbox"}


@app.get("/api/health")
async def root():
    return {"health": "OK"}


@app.post("/api/calculations/fatigue/")
async def calculate_fatigue(payload: FatiguePayload, excel: bool = True):
    return FatigueWebWrapper(payload, excel).fatigue()


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
