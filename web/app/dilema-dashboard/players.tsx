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
      classNames={{wrapper: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 mx-10"}}
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
          avatar: "https://openmoji.org/data/color/svg/1F914.svg",
        }}
      />
      <CustomCheckbox
        value="Periodique_cct"
        user={{
          name: "Periodique cct",
          avatar: "https://openmoji.org/data/color/svg/1FAE8.svg",
        }}
      />
      <CustomCheckbox
        value="Donnant_Donnant_dur"
        user={{
          name: "Donnant Donnant dur",
          avatar: "https://openmoji.org/data/color/svg/1FAE1.svg",
        }}
      />
      <CustomCheckbox
        value="Gentille"
        user={{
          name: "Gentille",
          avatar: "https://openmoji.org/data/color/svg/1F917.svg",
        }}
      />
      <CustomCheckbox
        value="Lunatique"
        user={{
          name: "Lunatique",
          avatar: "https://openmoji.org/data/color/svg/1F635-200D-1F4AB.svg",
        }}
      />
      <CustomCheckbox
        value="Mefiant"
        user={{
          name: "Mefiant",
          avatar: "https://openmoji.org/data/color/svg/1F928.svg",
        }}
      />
      <CustomCheckbox
        value="Mechant"
        user={{
          name: "Mechant",
          avatar: "https://openmoji.org/data/color/svg/1F620.svg",
        }}
      />
      <CustomCheckbox
        value="MajoDur"
        user={{
          name: "Majo dur",
          avatar: "https://openmoji.org/data/color/svg/1F978.svg",
        }}
      />
      <CustomCheckbox
        value="Periodique_ttc"
        user={{
          name: "Periodique ttc",
          avatar: "https://openmoji.org/data/color/svg/1F974.svg",
        }}
      />
      <CustomCheckbox
        value="Rancunière"
        user={{
          name: "Rancuniere",
          avatar: "https://openmoji.org/data/color/svg/1F62E-200D-1F4A8.svg",
        }}
      />
    </CheckboxGroup>
  )
}