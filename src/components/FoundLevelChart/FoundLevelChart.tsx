"use client";
import React, { ReactNode } from "react";
import s from "./FoundLevelChart.module.css";
import Stack from "../Stack/Stack";

type BadgeProps = {
  min: number;
  max: number;
  value: number;
}

export const FoundLevelChart = ({ min, max, value }: BadgeProps) => {
  return <div className={s.container}>
    <div className={s.bar}></div>
    <Stack
      className={s.legend}
      justify="space-between"
      direction="row"
    >
      <span>{min} month</span>
      <span>Recommended</span>
      <span>{max} months</span>
    </Stack>
    <span className={s.label}>
      You are here
    </span>
  </div>;
}
