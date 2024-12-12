"use client";

import React from "react";
import {SliderValue} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";

type ParametersType = {
  T: SliderValue,
  setT: React.Dispatch<React.SetStateAction<SliderValue>>
  C: SliderValue,
  setC: React.Dispatch<React.SetStateAction<SliderValue>>
  P: SliderValue,
  setP: React.Dispatch<React.SetStateAction<SliderValue>>
  D: SliderValue
  setD: React.Dispatch<React.SetStateAction<SliderValue>>
}

export default function GameParameters({
  T, setT, 
  C, setC, 
  P, setP, 
  D, setD
}: ParametersType) {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-around my-6">
      <div className="flex flex-col items-center justify-around h-36 w-80">
        <Slider size="md" step={1} color="primary" label="Tentation"
        showSteps={true} maxValue={7} minValue={0} value={T}
        onChange={setT} className="max-w-60 sm:max-w-xs lg:max-w-60 xl:max-w-xs"
        />
        <Slider size="md" step={1} color="primary" label="Cooperation"
        showSteps={true} maxValue={7} minValue={0} value={C}
        onChange={setC} className="max-w-60 sm:max-w-xs lg:max-w-60 xl:max-w-xs"
        />
      </div>
      <div className="flex flex-col items-center justify-around h-36 w-80">
        <Slider size="md" step={1} color="primary" label="Punishment"
        showSteps={true} maxValue={7} minValue={0} value={P}
        onChange={setP} className="max-w-60 sm:max-w-xs lg:max-w-60 xl:max-w-xs"
        />
        <Slider size="md" step={1} color="primary" label="Duperie"
        showSteps={true} maxValue={7} minValue={0} value={D}
        onChange={setD} className="max-w-60 sm:max-w-xs lg:max-w-60 xl:max-w-xs"
        />
      </div>
    </div>
  )
}
