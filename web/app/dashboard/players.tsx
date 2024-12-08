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
    <CheckboxGroup
      value={playersSelected}
      onChange={setPlayersSelected}
      classNames={{wrapper: "grid grid-cols-4 gap-4 my-6 mx-10"}}
    >
      <CustomCheckbox
        value="Donnant_Donnant"
        user={{
          name: "Donnant Donnant",
          avatar: "https://openmoji.org/data/color/svg/1F600.svg",
        }}
      />
      <CustomCheckbox
        value="MajoMou"
        user={{
          name: "Majo mou",
          avatar: "https://openmoji.org/data/color/svg/1FAE0.svg",
        }}
      />
      <CustomCheckbox
        value="Sondeur"
        user={{
          name: "Sondeur",
          avatar: "https://openmoji.org/data/color/svg/1F928.svg",
        }}
      />
      <CustomCheckbox
        value="Periodique_cct"
        user={{
          name: "Periodique cct",
          avatar: "https://openmoji.org/data/color/svg/1FAE8.svg",
        }}
      />
    </CheckboxGroup>
  )
}