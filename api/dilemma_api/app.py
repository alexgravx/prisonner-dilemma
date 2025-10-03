from fastapi import FastAPI, Query
from pydantic import RootModel, BaseModel
from dilemma_pkg import main

from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
import os
load_dotenv()

app = FastAPI()

origins = [
    f"http://{os.getenv('FRONTEND_URL')}",
    f"http://{os.getenv('FRONTEND_URL')}:{os.getenv('FRONTEND_PORT')}",
    f"https://{os.getenv('FRONTEND_URL')}",
    f"https://{os.getenv('FRONTEND_URL')}:{os.getenv('FRONTEND_PORT')}",
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

class DataInput(BaseModel):
    turns: int = 100,
    pop: int = 100,
    T: int = 5,
    C: int = 3,
    P: int = 1,
    D: int = 0,
    player_list: list[str] | None = Query(default=None)

@app.get("/api/ping")
def get_ping():
    return "pong"

@app.post("/api/arena")
def get_arena(data: DataInput) -> list[Strategy]:
    arena_turns = main.main(data.turns, data.pop, data.T, data.C, data.P, data.D, data.player_list)
    arena_result = [Strategy(root=turn) for turn in arena_turns]
    return arena_result