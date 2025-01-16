import React from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "white";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className,
  disabled,
  icon,
  iconPosition = "left",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2";

  const variantStyles = {
    primary: "bg-black border-2 border-black bg-white text-black",
    secondary:
      "bg-custom-white text-black border-2 border-black hover:bg-black hover:text-white",
    white:
      "border-2 text-xs border-black bg-white text-black border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
