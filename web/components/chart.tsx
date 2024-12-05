import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

async function getData(url:URL) {
  try {
    const response = await fetch(url);
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

export function ResultLineChart(
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
      players: string[]
    ) {
      const full_url = new URL("http://localhost:8000/arena");
      turns && full_url.searchParams.set('turns', turns.toString())
      pop && full_url.searchParams.set('pop', pop.toString())
      T && full_url.searchParams.set('T', T.toString())
      C && full_url.searchParams.set('P', P.toString())
      P && full_url.searchParams.set('C', C.toString())
      D && full_url.searchParams.set('D', D.toString())
      players && full_url.searchParams.set('player_list', players.toString())
      let data = await getData(full_url)
      setChartData(data);
    }
    getChartData(turns, pop, T, C, P, D, players);
  }, [turns, pop, T, C, P, D, players]);

  return (
    <ResponsiveContainer width="100%" height="100%" className="min-h-[40rem]">
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