import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import { button } from "@/styles/component/button.css";

interface DefaultButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary" | "disabled";
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({children, type="button", className, disabled, onClick, color="primary", size="small"}: DefaultButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        button({color, size}),
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  )
};