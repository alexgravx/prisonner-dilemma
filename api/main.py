from fastapi import FastAPI
from pydantic import BaseModel, RootModel
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

class Strategy(RootModel[dict[str, float]]):
    root: dict[str, float | int]

@app.get("/")
def hello_world():
    return {"Hello": "World"}

@app.get("/arena")
def get_arena() -> list[Strategy]:
    arena_turns = main.main()
    arena_result = [Strategy(root=turn) for turn in arena_turns]
    return arena_result

@app.get("/players")
def get_players() -> list[str]:
    arena_players = main.players()
    return arena_players