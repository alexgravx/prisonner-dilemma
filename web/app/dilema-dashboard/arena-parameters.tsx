"use client";

import React from "react";
import {SliderValue} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";

type ParametersType = {
  turns: SliderValue,
  setTurns: React.Dispatch<React.SetStateAction<SliderValue>>
  pop: SliderValue,
  setPop: React.Dispatch<React.SetStateAction<SliderValue>>
}

export default function ArenaParameters({
  turns, setTurns,
  pop, setPop
}: ParametersType) {
  return (
    <div className="flex flex-col justify-around items-center h-36 my-6">
        <Slider size="md" step={1} color="warning" label="Population"
        showSteps={false} maxValue={300} minValue={20} value={pop}
        onChange={setPop} className="max-w-xs"
        />
        <Slider size="md" step={1} color="warning" label="Nb of rounds"
        showSteps={false} maxValue={300} minValue={20} value={turns}
        onChange={setTurns} className="max-w-xs"
        />
    </div>
  )
}
