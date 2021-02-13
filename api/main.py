from fastapi import FastAPI
import uvicorn
from fatigueWebWrapper.Payload import FatiguePayload
from fatigueWebWrapper.wrapper import FatigueWebWrapper

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/api/calculations/fatigue")
async def calculate_fatigue(payload: FatiguePayload):
    mod_factor = FatigueWebWrapper(payload).get_mod_factor()
    print(f"MOdification factor {mod_factor}")


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
