"use client";
import React from "react";
import {NextUIProvider, SliderValue} from "@nextui-org/react";
import {CheckboxGroup} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";
import {ResultLineChart} from "@/components/chart"
import {CustomCheckbox} from "@/components/custom_checkbox";

export default function Home() {
  const [groupSelected, setGroupSelected] = React.useState<string[]>([]);
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
          Arena Players
        </h1>
        <div className="flex flex-col gap-1 w-full">
          <CheckboxGroup
            label="Select employees"
            value={groupSelected}
            onChange={setGroupSelected}
            classNames={{
              base: "w-full"
            }}
          >
            <CustomCheckbox
              value="Donnant_Donannt"
              user={{
                name: "Donnant Donnant",
                avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                role: "I cooperate on the first turn, then I play what my opponent has played the previous turn",
              }}
            />
            <CustomCheckbox
              value="MajoMou"
              user={{
                name: "Majo mou",
                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                role: "I play what my opponent has mostly played, at first run or in case of a tie I cooperate",
              }}
            />
            <CustomCheckbox
              value="Sondeur"
              user={{
                name: "Sondeur",
                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                role: "On the first 3 moves, I play tcc; From move 4, if my opponent cooperate on moves 2 and 3 -> I always betray. Else, I play Donnant-donnant",
              }}
            />
            <CustomCheckbox
              value="Periodique_cct"
              user={{
                name: "Periodique cct",
                avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
                role: "Periodic player. Follows always the same order: Cooperate - Cooperate - Betray",
              }}
            />
          </CheckboxGroup>
          <p className="mt-4 ml-1 text-default-500">
            Selected: {groupSelected.join(", ")}
          </p>
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
