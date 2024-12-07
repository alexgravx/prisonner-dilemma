"use client";

import Link from "next/link"
import {Button} from "@nextui-org/react";
import { ModeToggle } from "@/components/mode-toggle"
import {HeroHighlightDemo} from "@/components/dashboard_test"
import { Highlight } from "@/components/ui/hero-highlight";
import Image from 'next/image'

export default function Provider() {
  return (
    <HeroHighlightDemo>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-baseline min-w-[40vw]">
          <div>
          {"Prisoner's Dilemma."}
          </div>
          <Highlight className="text-black dark:text-white">
            betray
          </Highlight>
          {" or "}
          <Highlight className="text-black dark:text-white">
            cooperate ?
          </Highlight>
          <div className="flex justify-center items-center mt-10">
            <div className={"mx-8"}>
              <ModeToggle />
            </div>
            <Link href="/dashboard">
              <Button color="primary" variant="ghost">
                Start the game !
              </Button>  
            </Link>
          </div>
        </div>
        <Image
          src="/PrisonnerSimulation.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          />
      </div>
    </HeroHighlightDemo>
  )
}
