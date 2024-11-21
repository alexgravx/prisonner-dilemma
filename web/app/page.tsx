"use client";

import Link from "next/link"
import Image from 'next/image'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 className="mt-10">
          Prisonner Dilemma
        </h1>
        <div className="relative p-3 rounded-lg bg-gray-200 text-black mt-8">
          <Image
            className="rounded-lg mt-0 mb-0"
            src="/prisonner.jpg"
            width={1000}
            height={1000}
            alt="Prisonner Dilemma illustration"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/dashboard">
            <Button color="primary" variant="ghost">
              Start the game !
            </Button>  
          </Link>
        </div>
      </div>
    </NextUIProvider>
  )
}
