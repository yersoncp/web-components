import React, { ReactNode } from 'react';
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.inner}>
          UI components
        </div>
      </div>
    </div>
  )
};
