import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import { button, btnWrap } from "@/app/styles/component/button.css";

interface BtnWrapProps {
  className?: string;
  children: ReactNode;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  gap?: string;
};

export const ButtonWrap = ({ className, children, direction="row", align="center", gap=".6rem" }: BtnWrapProps) => {
  const gapStyle:CSSProperties = gap ? {gap} : {};
  return <div
    className={clsx(
      className,
      btnWrap({direction, align}),
    )}
    style={gapStyle}
  >{children}</div>
};

interface DefaultButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary" | "third" | "disabled";
  size?: 'auto' | 'small' | 'medium' | 'large';
  blank?: 'space0' | 'space1';
};

export const Button = ({ children, type = "button", className, disabled, onClick, color = "primary", size = "small", blank="space1" }: DefaultButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        button({ color, size, blank }),
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  )
};