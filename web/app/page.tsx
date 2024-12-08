"use client";

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { GridBackground } from "@/components/welcome-background"
import { Highlight } from "@/components/ui/hero-highlight";
import { HoverNeonBox } from "@/components/neon-box";
import { HoverButton } from "@/components/custom-button"

export default function Provider() {
  return (
    <GridBackground>
      <div className="flex flex-col xl:flex-row justify-between items-center w-[80vw]">
        <div className="flex flex-col justify-center items-baseline min-w-[40vw]">
          <div>
          {"Prisoner's Dilemma"}
          </div>
          <div className="flex flex-row">
            <Highlight className="text-black dark:text-white">
              Betray
            </Highlight>
            <span>
              &nbsp;or&nbsp;
            </span>
            <Highlight className="text-black dark:text-white">
              Cooperate ?
            </Highlight>
          </div>
          <div className="flex justify-center items-center my-10">
            <div className={"mx-8"}>
              <ModeToggle />
            </div>
            <Link href="/dashboard">
              <HoverButton />
            </Link>
          </div>
        </div>
        <HoverNeonBox />
      </div>
    </GridBackground>
  )
}
