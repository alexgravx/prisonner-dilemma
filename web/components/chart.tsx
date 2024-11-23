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

export async function Example() {
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
          strokeWidth={2}
          dot={false}
        />)
        }
      </LineChart>
    </ResponsiveContainer>
  );
}