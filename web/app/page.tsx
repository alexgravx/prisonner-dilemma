"use client";

import Link from "next/link"
import {Button} from "@nextui-org/react";
import {HeroHighlightDemo} from "@/components/dashboard_test"

export default function Provider() {
  return (
    <HeroHighlightDemo>
      <div className="flex justify-center mt-10">
        <Link href="/dashboard">
          <Button color="primary" variant="ghost">
            Start the game !
          </Button>  
        </Link>
      </div>
    </HeroHighlightDemo>
  )
}
