import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Strategy = {
  strategy_label: string;
  population: number[];
};

async function getData(url:string) {
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

async function getChartData() {
  return getData("http://localhost:8000/arena")
}

async function getPlayers() {
  return getData("http://localhost:8000/players")
}

var colors = ["#111111", "#356000", "#148f77", "#d35400", "#1b4f72", "#85c1e9", "#f4d03f", "#283747", "#d98880", "#148f77", "#e74c3c", "#f2f3f4"]

export async function ResultLineChart() {
  let chart_data = await getChartData()
  let players = await getPlayers()
  return (
    <ResponsiveContainer width="100%" height="100%" className="min-h-[40rem]">
      <LineChart
        width={500}
        height={800}
        data={chart_data}
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