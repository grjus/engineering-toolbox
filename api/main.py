from fastapi import FastAPI,Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fatigueWebWrapper.Payload import FatiguePayload
from fatigueWebWrapper.wrapper import FatigueWebWrapper

from stressCorrectionWrapper.Payload import NeuberPayload
from stressCorrectionWrapper.wrapper import StressCorrectionWebWrapper
from contactWrapper.wrapper import Contact
from contactWrapper.Payload import ContactFormPayload

from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

origins = [
    "http://localhost:8000/","https://eng-tool.herokuapp.com","http://localhost:8000/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


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
