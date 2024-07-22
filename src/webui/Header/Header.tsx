import React, { ReactNode } from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className="px-6 py-2">
      <div className={s.inner}>React Dashboard</div>
    </div>
  );
};
