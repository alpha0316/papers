// import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1st", value: 170.5 },
  { name: "2nd", value: 120.0 },
  { name: "3rd", value: 50.25 },
  { name: "4th", value: 80.75 },
  { name: "5th", value: 90.0 },
  { name: "6th", value: 150.3 },
  { name: "7th", value: 160.8 },
  { name: "8th", value: 110.5 },
  { name: "9th", value: 70.2 },
  { name: "10th", value: 60.0 },
  { name: "11th", value: 90.1 },
  { name: "12th", value: 110.0 },
];


const OverviewChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 20, right: 50, left: 12, bottom: 12 }}>
          <CartesianGrid vertical={true} strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" horizontal={false} />
          <XAxis dataKey="name" tick={{ fill: "rgba(0,0,0,0.5)" }} stroke="" />
          <YAxis tick={{ fill: "rgba(0,0,0,0.5)" }} stroke=""  />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="rgba(0,0,0,0.2)" strokeWidth={1} dot={{ fill: "#000", r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
