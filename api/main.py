from fastapi import FastAPI
from pydantic import BaseModel
from dilemma_pkg import main

class Strategy(BaseModel):
    strategy_label: str
    population: list[float]

app = FastAPI()

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