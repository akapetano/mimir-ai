import classNames from "classnames";
import { ReactNode } from "react";

interface IButtonProps {
  label: string;
  variant: "primary" | "secondary" | "accent" | "ghost";
  disabled?: boolean;
  iconOnly?: boolean;
  icon?: ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  label,
  variant,
  disabled,
  iconOnly,
  icon,
  type,
  onClick,
  className,
}: IButtonProps) => {
  const classes = classNames(`p-3 rounded-md ${className}`, {
    "cursor-not-allowed": disabled === true,
    "bg-blue hover:bg-blue-light text-black": variant === "primary",
    "bg-transparent border-2 border-blue text-blue hover:bg-blue-light hover:border-blue-light hover:text-black":
      variant === "ghost",
    "bg-red-600 text-white hover:bg-red-700": variant === "accent",
  });

  return (
    <button
      type={type ? type : "button"}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {iconOnly ? icon : label}
    </button>
  );
};
