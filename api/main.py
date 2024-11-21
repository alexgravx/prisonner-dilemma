from fastapi import FastAPI
from pydantic import BaseModel
from dilemma_pkg import main

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Strategy(BaseModel):
    strategy_label: str
    population: list[float]

@app.get("/")
def hello_world():
    return {"Hello": "World"}

@app.get("/matrice")
def return_matrice() -> list[Strategy]:
    Populations_dict = main.matrice()
    print(Populations_dict)
    test = [Strategy(strategy_label=i, population=j) for i,j in Populations_dict.items()]
    print(test)
    return test