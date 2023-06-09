"use client";
import React, { FC, ReactNode, useState } from "react";
import s from "./Card.module.css";

type CardProps = {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <>
    <div className={s.container}>
      {children}
    </div>
  </>;
}

export default Card;
