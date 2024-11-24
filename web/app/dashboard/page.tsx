"use client";
import React from "react";
import {NextUIProvider, SliderValue} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";
import {ResultLineChart} from "@/components/chart"

export default function Home() {
  const [turns, setTurns] = React.useState<SliderValue>(100);
  const [pop, setPop] = React.useState<SliderValue>(100);
  const [T, setT] = React.useState<SliderValue>(5);
  const [C, setC] = React.useState<SliderValue>(3);
  const [P, setP] = React.useState<SliderValue>(1);
  const [D, setD] = React.useState<SliderValue>(0);

  return (
    <NextUIProvider>
      <div className="prose dark:prose-invert min-w-[55rem]">
        <h1 className="mt-10">
          Dilemma game Parameters
        </h1>
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
        />
      </div>
    </NextUIProvider>
  )
}
