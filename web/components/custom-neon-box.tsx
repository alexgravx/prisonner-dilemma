"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function HoverNeonBox() {
  const [selectedImage, setImage] = useState('/PrisonnerNeighbour.jpg')
  
  useEffect(() => {
    const images = ['/PrisonnerNeighbour.jpg', '/PrisonnerMath.jpg', '/PrisonnerSimulation.jpg']
    setImage(images[Math.floor(Math.random() * 3)])
  }, [])

  const title = "Prisoner's Arena"
  const description = "Many different strategies are used in the arena: nice, nasty, give and take, etc."+
  "Should you betray or cooperate ? Maybe you should try your own strategies?"

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={selectedImage}
          alt="jordans"
          height="400"
          width="400"
          priority
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
