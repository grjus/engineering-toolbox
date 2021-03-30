from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from webService.fatigueWebWrapper.Payload import FatiguePayload
from webService.fatigueWebWrapper.wrapper import FatigueWebWrapper
from webService.stressCorrectionWrapper.Payload import NeuberPayload
from webService.stressCorrectionWrapper.wrapper import StressCorrectionWebWrapper
from webService.contactWrapper.wrapper import Contact
from webService.contactWrapper.Payload import ContactFormPayload

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
                    "loc": ["body", "resultsData"],
                    "msg": "Unable to find convergent solution. Check your input data",
                    "type": "value_error",
                }
            ]
        }
        return JSONResponse(content=response, status_code=422)


@app.post("/api/calculations/stress-correction/")
async def calculate_neuber(payload: NeuberPayload):
    import time

    time.sleep(0.5)
    try:
        return StressCorrectionWebWrapper(payload).get_data()
    except Exception as e:
        response = {
            "detail": [
                {
                    "loc": ["body", "resultsData"],
                    "msg": "Unable to find convergent solution. Check your input data",
                    "type": "value_error",
                }
            ]
        }
        return JSONResponse(content=response, status_code=422)


@app.post("/api/contact")
async def contact(payload: ContactFormPayload):
    try:
        Contact(payload).send()
        return JSONResponse({"detail": "Thank you for submitting your message. I'll contact you shortly"})
    except Exception as e:
        return JSONResponse({"detail": str(e)}, status_code=502)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
