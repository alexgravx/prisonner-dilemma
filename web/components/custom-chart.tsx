import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  } catch (error: any) {
    console.error(error.message);
  }
}

var colors = ["#111111", "#356000", "#148f77", "#d35400", "#1b4f72", "#85c1e9", "#f4d03f", "#283747", "#d98880", "#148f77", "#e74c3c", "#d2b4de"]

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
      const url = new URL("http://localhost:8000/arena");
      let data_input = {
        turns: turns,
        pop: pop,
        T: T,
        P: P,
        C: C,
        D: D,
        player_list: player_list
      }
      let data_output = await getData(url, data_input)
      setChartData(data_output);
    }
    getChartData(turns, pop, T, C, P, D, players);
  }, [turns, pop, T, C, P, D, players]);

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
        {players.map((player:any, index:number) => 
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
  );
}