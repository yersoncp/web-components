"use client";
import React, { ReactNode, useState } from "react";
import s from "./BarChart.module.css";

const DATA = [
  { id: 1, value: 445, label: "Direct" },
  { id: 2, value: 277, label: "Search" },
  { id: 3, value: 420, label: "Market" },
  { id: 4, value: 297, label: "Social" },
  { id: 6, value: 469, label: "Organic" },
  { id: 5, value: 237, label: "Other" },
]

const BarChart = () => {
  const max = Math.max(...(DATA?.map(e => e.value)));
  const width = Math.floor(100 / DATA.length);

  const getBarSize = (value: number) => {
    return (value / max) * 12;
  }

  return <>
    <div className={s.container}>
      {DATA.map(d => (
        <div
          key={d.id}
          className={s.bar}
          style={{
            width: `${width}%`,
            height: `${getBarSize(d.value)}rem`
          }}
        >
          <span className={s.value}>{d.value}</span>
          <span className={s.label}>{d.label}</span>
        </div>
      ))}
    </div>
  </>;
}

export default BarChart;
