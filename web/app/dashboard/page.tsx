"use client";

import React from "react";
import {SliderValue} from "@nextui-org/react";
import {ResultLineChart} from "@/components/chart"

import Parameters from "./parameters"
import Players from "./players";

export default function Home() {
  const [playersSelected, setPlayersSelected] = React.useState<string[]>(['Donnant_Donnant', 'MajoMou']);
  const [turns, setTurns] = React.useState<SliderValue>(100);
  const [pop, setPop] = React.useState<SliderValue>(100);
  const [T, setT] = React.useState<SliderValue>(5);
  const [C, setC] = React.useState<SliderValue>(3);
  const [P, setP] = React.useState<SliderValue>(1);
  const [D, setD] = React.useState<SliderValue>(0);

  return (
    <div className="prose dark:prose-invert min-w-[55rem]">
      <Parameters 
        turns={turns} setTurns={setTurns}
        pop={pop} setPop={setPop}
        T={T} setT={setT} C={C} setC={setC}
        P={P} setP={setP} D={D} setD={setD}
      />
      <Players
        playersSelected={playersSelected}
        setPlayersSelected={setPlayersSelected}
      />
      <h1 className="mt-10">
        Arena Results
      </h1>
      <ResultLineChart
        turns={Number(turns)}
        pop={Number(pop)}
        T={Number(T)}
        C={Number(C)}
        P={Number(P)}
        D={Number(D)}
        players={playersSelected}
      />
    </div>
  )
}
