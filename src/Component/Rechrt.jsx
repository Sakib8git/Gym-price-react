import React from "react";
import { Line, LineChart, XAxis, YAxis,Tooltip } from "recharts";

const personDataExer = [
  {
    id: 1,
    name: "Sakib",
    bmi: 23.4,
    exerciseHoursPerWeek: 5,
  },
  {
    id: 2,
    name: "Ayesha",
    bmi: 21.8,
    exerciseHoursPerWeek: 3,
  },
  {
    id: 3,
    name: "Tanvir",
    bmi: 27.1,
    exerciseHoursPerWeek: 2,
  },
  {
    id: 4,
    name: "Farzana",
    bmi: 19.6,
    exerciseHoursPerWeek: 4,
  },
  {
    id: 5,
    name: "Rafiul",
    bmi: 25.3,
    exerciseHoursPerWeek: 6,
  },
  {
    id: 6,
    name: "Shamima",
    bmi: 22.0,
    exerciseHoursPerWeek: 3.5,
  },
  {
    id: 7,
    name: "Mahmudul",
    bmi: 28.7,
    exerciseHoursPerWeek: 1,
  },
  {
    id: 8,
    name: "Rumana",
    bmi: 20.9,
    exerciseHoursPerWeek: 4.5,
  },
  {
    id: 9,
    name: "Imran",
    bmi: 26.5,
    exerciseHoursPerWeek: 2.5,
  },
  {
    id: 10,
    name: "Nusrat",
    bmi: 24.2,
    exerciseHoursPerWeek: 5.5,
  },
];

const Rechrt = () => {
  return (
    <div className="bg-white container mx-auto">
      <LineChart width={1000} height={300} data={personDataExer}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="bmi" stroke="red"></Line>
        <Line dataKey="exerciseHoursPerWeek" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default Rechrt;
