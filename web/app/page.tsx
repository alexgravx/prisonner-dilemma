"use client";

import Link from "next/link"
import {Button} from "@nextui-org/react";
import { ModeToggle } from "@/components/mode-toggle"
import {HeroHighlightDemo} from "@/components/welcome-background"
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundGradientDemo } from "@/components/light-box";
import { HoverBorderGradientDemo } from "@/components/custom-button"

export default function Provider() {
  return (
    <HeroHighlightDemo>
      <div className="flex md:flex-col lg:flex-row justify-between items-center w-[80vw]">
        <div className="flex flex-col justify-center items-baseline min-w-[40vw]">
          <div>
          {"Prisoner's Dilemma."}
          </div>
          <Highlight className="text-black dark:text-white">
            Betray
          </Highlight>
          {" or "}
          <Highlight className="text-black dark:text-white">
            Cooperate ?
          </Highlight>
          <div className="flex justify-center items-center mt-10">
            <div className={"mx-8"}>
              <ModeToggle />
            </div>
            <Link href="/dashboard">
              <HoverBorderGradientDemo />
            </Link>
          </div>
        </div>
        <BackgroundGradientDemo />
      </div>
    </HeroHighlightDemo>
  )
}
