"use client";
import React, { ReactNode, useState } from "react";
import s from "./BarChart.module.css";

type BarChartProps = {
  data: {
    id: number;
    value: number;
    label: string;
  }[];
  level?: number;
}

const BarChart = ({ data, level }: BarChartProps) => {
  const max = Math.max(...(data?.map(e => e.value)));
  const width = Math.floor(100 / data.length);

  const getBarSize = (value: number) => {
    return (value / max) * 12;
  }

  return <>
    <div className={s.container}>
      {data.map((d, idx) => (
        <div
          key={idx}
          className={s.bar}
          style={{
            width: `${width}%`,
            height: `${getBarSize(d.value)}rem`
          }}
        >
          {level && (d.value - level) > 0 && (
            <span className={s.levelBar} style={{ height: `${getBarSize(d.value - level)}rem`}}>
              +{d.value - level}
            </span>
          )}
          <span className={s.value}>{d.value}</span>
          <span className={s.label}>{d.label}</span>
        </div>
      ))}

      {level && (
        <div
          className={s.levelLine}
          style={{
            bottom: `${getBarSize(level)}rem`
          }}
        >
          Potential revenue:
          {" "}
          <b>{level}</b>
        </div>
      )}

    </div>
  </>;
}

export default BarChart;
