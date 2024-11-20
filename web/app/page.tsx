"use client";
import * as React from "react";
import Image from 'next/image'
import {NextUIProvider} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="prose dark:prose-invert max-w-4xl">
        <h1 className="mt-8">
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
        <div>
          <h1 className="mt-8">
            Parameters selection
          </h1>
          <Slider size="lg" step={1} color="primary" label="Tentation"
          showSteps={true} maxValue={7} minValue={0} defaultValue={5}
          className="max-w-md" 
          />
          <Slider size="lg" step={1} color="primary" label="Cooperation"
          showSteps={true} maxValue={7} minValue={0} defaultValue={3}
          className="max-w-md" 
          />
          <Slider size="lg" step={1} color="primary" label="Punishment"
          showSteps={true} maxValue={7} minValue={0} defaultValue={1}
          className="max-w-md" 
          />
          <Slider size="lg" step={1} color="primary" label="Duperie"
          showSteps={true} maxValue={7} minValue={0} defaultValue={0}
          className="max-w-md" 
          />
        </div>
      </div>
    </NextUIProvider>
  )
}
