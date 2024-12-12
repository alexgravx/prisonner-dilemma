"use client";

import Link from "next/link"
import { ModeToggle } from "@/components/custom-theme-toggle"
import { GridBackground } from "@/components/custom-grid-background"
import { Highlight } from "@/components/ui/hero-highlight";
import { HoverNeonBox } from "@/components/custom-neon-box";
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
          <div className="flex gap-8 items-center justify-center xl:justify-start mt-10">
            <div>
              <ModeToggle />
            </div>
            <Link href="/dashboard">
              <HoverButton />
            </Link>
          </div>
          <div className="text-xs font-medium dark:text-[#c1c1c1] my-6">
            {"Created by "}
            <a
              href="https://github.com/alexgravx"
              className="underline hover:text-indigo-500 transition ease-in-out duration-500">
                Alexandre Gravereaux
            </a>
          </div>
        </div>
        <HoverNeonBox />
      </div>
    </GridBackground>
  )
}
