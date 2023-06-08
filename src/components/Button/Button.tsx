"use client";
import React, { FC, ReactNode, useState } from "react";
import s from "./Button.module.css";

type ButtonProps = {
  children: ReactNode
  options?: string[]
  showArrow?: boolean
}

const Button: FC<ButtonProps> = ({ children, showArrow, options }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(prev => !prev);
  }

  return <>
    <div className={s.container}>
      <button className={s.button} onClick={handleToggle}>
        <span>{children}</span>
        {showArrow && (
          <i className={s.arrowDown}></i>
        )}
      </button>

      {options?.length && (
        <div className={`${s.options} ${active ? s.active : ''}`}>
          {options.map((option, idx) => (
            <div
              key={idx}
              className={s.optionLink}
              onClick={handleToggle}
              >
                {option}
            </div>
          ))}
        </div>
      )}
    </div>
  </>;
}

export default Button;
