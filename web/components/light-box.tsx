"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/PrisonnerSimulation.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Prisoner's Arena
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Many different strategies are used in the arena: nice, nasty, give and take, etc.
          Should you betray or cooperate ? Maybe you should try your own strategies?
        </p>
      </BackgroundGradient>
    </div>
  );
}
