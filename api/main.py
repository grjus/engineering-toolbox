from fastapi import FastAPI
from fastapi import responses
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fatigueWebWrapper.Payload import FatiguePayload
from fatigueWebWrapper.wrapper import FatigueWebWrapper

from stressCorrectionWrapper.Payload import NeuberPayload
from stressCorrectionWrapper.wrapper import StressCorrectionWebWrapper

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
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
    try:
        return FatigueWebWrapper(payload, excel).fatigue()
    except Exception as e:
        response = {
                    "detail": [
                        {
                        "loc": [
                            "body",
                            "resultsData"
                        ],
                        "msg": "Unable to find convergent solution. Check your input data",
                        "type": "value_error"
                        }
                    ]
                    }
        return JSONResponse(content=response, status_code=422)


@app.post("/api/calculations/stress-correction/")
async def calculate_neuber(payload:NeuberPayload):
    try:
        return StressCorrectionWebWrapper(payload).get_data()
    except Exception as e:
        response = {
                    "detail": [
                        {
                        "loc": [
                            "body",
                            "resultsData"
                        ],
                        "msg": "Unable to find convergent solution. Check your input data",
                        "type": "value_error"
                        }
                    ]
                    }
        return JSONResponse(content=response, status_code=422)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
