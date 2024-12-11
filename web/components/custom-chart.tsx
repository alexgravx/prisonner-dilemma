import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IconServerOff } from "@tabler/icons-react"

type DataInput = {
    turns: number,
    pop: number,
    T: number,
    P: number,
    C: number,
    D: number,
    player_list: string[]
  }

async function getData(url:URL, data_input:DataInput) {
  try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data_input),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json
  } catch (error) {
    console.error(error);
  }
}

const colors = ["#ffffff", "#356000", "#148f77", "#d35400", "#1b4f72", "#85c1e9", "#f4d03f", "#283747", "#d98880", "#148f77", "#e74c3c", "#d2b4de"]

export function ArenaChart(
  { turns, pop, T, C, P, D, players }:
  { turns: number,
    pop: number,
    T: number,
    C: number,
    P: number,
    D: number,
    players: string[] }
) {
  const [chartData, setChartData] = useState([]);
  const [isServerUp, setIsServerUp] = useState(true);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/ping`);
      if (response.status === 200) {
        setIsServerUp(true);
      } else {
        setIsServerUp(false);
      }
    } catch (error) {
      setIsServerUp(false);
      console.log(error)
    }
  };

  useEffect(() => {
    async function getChartData(
      turns:number,
      pop:number,
      T:number,
      C:number,
      P:number,
      D:number,
      player_list: string[]
    ) {
      const url = new URL(`https://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/arena`);
      const data_output = await getData(
        url,
        {
          turns: turns,
          pop: pop,
          T: T,
          P: P,
          C: C,
          D: D,
          player_list: player_list
        }
      )
      setChartData(data_output);
    }
    getChartData(turns, pop, T, C, P, D, players);

    // Check server status on component mount
    checkServerStatus();
    // Set up an interval to check the server status every 10 seconds
    const intervalId = setInterval(checkServerStatus, 20000);
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);

  }, [turns, pop, T, C, P, D, players]);

  if (isServerUp) {
    return (
      <ResponsiveContainer width="100%" height="100%" className="min-h-[40rem] my-6">
        <LineChart
          width={500}
          height={800}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="turn" />
          <YAxis />
          <Tooltip active={false}/>
          <Legend />
          {players.map((player:string, index:number) =>
          <Line 
            type="monotone"
            key={index}
            dataKey={player}
            stroke={colors[index]}
            strokeWidth={2}
            dot={false}
          />)
          }
        </LineChart>
      </ResponsiveContainer>
    )
  } else {
    return (
      <div className="flex justify-center items-center gap-2 my-6">
        No results... The server is down
        <IconServerOff className="h-4 w-4 text-neutral-500"/>
      </div>
    )
  }
}