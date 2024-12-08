"use client";

import React from "react";
import {SliderValue} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";

type ParametersType = {
  turns: SliderValue,
  setTurns: React.Dispatch<React.SetStateAction<SliderValue>>
  pop: SliderValue,
  setPop: React.Dispatch<React.SetStateAction<SliderValue>>
  T: SliderValue,
  setT: React.Dispatch<React.SetStateAction<SliderValue>>
  C: SliderValue,
  setC: React.Dispatch<React.SetStateAction<SliderValue>>
  P: SliderValue,
  setP: React.Dispatch<React.SetStateAction<SliderValue>>
  D: SliderValue
  setD: React.Dispatch<React.SetStateAction<SliderValue>>
}

export default function Parameters({
  turns, setTurns,
  pop, setPop,
  T, setT, 
  C, setC, 
  P, setP, 
  D, setD
}: ParametersType) {
  return (
    <div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-80">
          <Slider size="lg" step={1} color="primary" label="Tentation"
          showSteps={true} maxValue={7} minValue={0} value={T}
          onChange={setT} className="max-w-md"
          />
          <Slider size="lg" step={1} color="primary" label="Cooperation"
          showSteps={true} maxValue={7} minValue={0} value={C}
          onChange={setC} className="max-w-md"
          />
        </div>
        <div className="flex flex-col w-80">
          <Slider size="lg" step={1} color="primary" label="Punishment"
          showSteps={true} maxValue={7} minValue={0} value={P}
          onChange={setP} className="max-w-md"
          />
          <Slider size="lg" step={1} color="primary" label="Duperie"
          showSteps={true} maxValue={7} minValue={0} value={D}
          onChange={setD} className="max-w-md"
          />
        </div>
      </div>
      <h1 className="mt-10">
        Arena Parameters
      </h1>
      <div className="flex flex-row justify-around">
          <Slider size="lg" step={1} color="primary" label="Population"
          showSteps={false} maxValue={300} minValue={20} value={pop}
          onChange={setPop} className="max-w-sm"
          />
          <Slider size="lg" step={1} color="primary" label="Nb of rounds"
          showSteps={false} maxValue={300} minValue={20} value={turns}
          onChange={setTurns} className="max-w-sm"
          />
      </div>
    </div>
  )
}
