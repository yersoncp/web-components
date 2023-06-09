"use client";
import React, { ReactNode, useState } from "react";
import s from "./BarChart.module.css";

const DATA = [
  { id: 1, value: 445, color: "#4ddbad" },
  { id: 2, value: 277, color: "#f8ca77" },
  { id: 3, value: 420, color: "#f99597" },
  { id: 4, value: 250, color: "#7aa8fa" },
  { id: 5, value: 469, color: "#df95fa" },
]

const BarChart = () => {
  const max = Math.max(...(DATA?.map(e => e.value)));

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
            background: `linear-gradient(0deg, #1a1a1b, ${d.color})`,
            height: `${getBarSize(d.value)}rem`
          }}
        >
          <span className={s.value}>
            {d.value}
          </span>
        </div>
      ))}
    </div>
  </>;
}

export default BarChart;
