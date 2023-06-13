import React, { FC, ReactNode } from "react";
import s from "./Text.module.css";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "small"
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5"
  align?: "center" | "right"
  color?:  "gray200" | "gray400" | "gray600" | "gray800" | "success" | "danger" | "primary"
  weight?: 300 | 400 | 500 | 600
  children: ReactNode
  className?: string
}

const Text: FC<TextProps> = ({ variant, children, as = "div", align, color, weight, className }) => {

  const classNameStr = [
    s.default,
    s[`${align}`],
    s[`${color}`],
    s[`${variant}`],
    s[`w${weight}`],
    className,
  ].join(" ")

  return React.createElement(
    as, 
    { className: classNameStr }, 
    children
  );

}

export default Text;
