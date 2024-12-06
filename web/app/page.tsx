"use client";

import Link from "next/link"
import Image from 'next/image'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {HeroHighlightDemo} from "@/components/dashboard_test"

export default function Home() {
  return (
    <NextUIProvider className="w-[100%] h-[100%]">
      <HeroHighlightDemo>
        <div className="flex justify-center mt-10">
          <Link href="/dashboard">
            <Button color="primary" variant="ghost">
              Start the game !
            </Button>  
          </Link>
        </div>
      </HeroHighlightDemo>
    </NextUIProvider>
  )
}
