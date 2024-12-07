"use client";

import React from "react";
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "@/components/custom-checkbox";

type Players = {
  playersSelected: string[],
  setPlayersSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Players({playersSelected, setPlayersSelected}: Players) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        label="Select employees"
        value={playersSelected}
        onChange={setPlayersSelected}
        classNames={{base: "w-full"}}
      >
        <CustomCheckbox
          value="Donnant_Donnant"
          user={{
            name: "Donnant Donnant",
            avatar: "https://openmoji.org/data/color/svg/1F600.svg",
            role: "I cooperate on the first turn, then I play what my opponent has played the previous turn",
          }}
        />
        <CustomCheckbox
          value="MajoMou"
          user={{
            name: "Majo mou",
            avatar: "https://openmoji.org/data/color/svg/1FAE0.svg",
            role: "I play what my opponent has mostly played, at first run or in case of a tie I cooperate",
          }}
        />
        <CustomCheckbox
          value="Sondeur"
          user={{
            name: "Sondeur",
            avatar: "https://openmoji.org/data/color/svg/1F928.svg",
            role: "On the first 3 moves, I play tcc; From move 4, if my opponent cooperate on moves 2 and 3 -> I always betray. Else, I play Donnant-donnant",
          }}
        />
        <CustomCheckbox
          value="Periodique_cct"
          user={{
            name: "Periodique cct",
            avatar: "https://openmoji.org/data/color/svg/1FAE8.svg",
            role: "Periodic player. Follows always the same order: Cooperate - Cooperate - Betray",
          }}
        />
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500">
        Selected: {playersSelected.join(", ")}
      </p>
    </div>
  )
}