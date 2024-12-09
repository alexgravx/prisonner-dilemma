"use client";

import React from "react";
import { SliderValue } from "@nextui-org/react";
import { ArenaChart } from "@/components/custom-chart"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconBrain,
  IconBrandAmongUs,
  IconChartAreaLine,
  IconChartCandle,
} from "@tabler/icons-react";

import GameParameters from "./game-parameters"
import ArenaParameters from "./arena-parameters"
import Header from "./header";
import Players from "./players";

type Bento = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

function FullBentoGrid({ items } : { items: Bento[] }) {
  return (
    <BentoGrid className="max-w-[80rem] mx-auto md:auto-rows-min">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export default function Home() {
  const [playersSelected, setPlayersSelected] = React.useState<string[]>(['Donnant_Donnant', 'MajoMou']);
  const [turns, setTurns] = React.useState<SliderValue>(100);
  const [pop, setPop] = React.useState<SliderValue>(100);
  const [T, setT] = React.useState<SliderValue>(5);
  const [C, setC] = React.useState<SliderValue>(3);
  const [P, setP] = React.useState<SliderValue>(1);
  const [D, setD] = React.useState<SliderValue>(0);

  const items = [
    {
      title: "Game Parameters",
      description: "Select parameters for the dilemma",
      header: 
        <GameParameters 
        T={T} setT={setT} C={C} setC={setC}
        P={P} setP={setP} D={D} setD={setD}
        />,
      className: "md:col-span-2",
      icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Arena Parameters",
      description: "Select parameters for the arena fight",
      header:
        <ArenaParameters
          turns={turns} setTurns={setTurns}
          pop={pop} setPop={setPop}
        />,
      className: "md:col-span-1",
      icon: <IconChartCandle className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Player Selection",
      description: "Select the players to fight in the arena",
      header:
        <Players
        playersSelected={playersSelected}
        setPlayersSelected={setPlayersSelected}
        />,
      className: "md:col-span-3",
      icon: <IconBrandAmongUs className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Arena Results",
      description: "Results of the arena fight, population over time for each player",
      header:
        <ArenaChart
        turns={Number(turns)}
        pop={Number(pop)}
        T={Number(T)}
        C={Number(C)}
        P={Number(P)}
        D={Number(D)}
        players={playersSelected}
        />,
      className: "md:col-span-3",
      icon: <IconChartAreaLine className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div>
    <Header />
      <div className="prose dark:prose-invert min-w-[80rem] mt-20">
        <FullBentoGrid items={items} />
      </div>
    </div>
  )
}
