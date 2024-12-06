"use client";

import Link from "next/link"
import {Button} from "@nextui-org/react";
import { ModeToggle } from "@/components/mode-toggle"
import {HeroHighlightDemo} from "@/components/dashboard_test"

export default function Provider() {
  return (
    <HeroHighlightDemo>
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
    </HeroHighlightDemo>
  )
}
