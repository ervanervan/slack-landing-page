import React from "react";

type StatButtonProps = {
  icon: React.ReactNode;
  count: number;
  className?: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
};

const sizeClasses = {
  small: "px-[9px] h-6 text-[10px]",
  medium: "px-[11px] h-8 text-xs",
  large: "px-3 h-[38px] text-sm",
  xlarge: "px-4 h-10 text-base",
};

const StatButton: React.FC<StatButtonProps> = ({
  icon,
  count,
  className,
  size = "medium",
}) => {
  return (
    <button
      className={`flex items-center h-8 gap-1 border border-black rounded-2xl bg-custom-white transition ${sizeClasses[size]} ${className}`}
      disabled
    >
      <span className="text-yellow-500">{icon}</span>
      <span className="font-semibold">{count}</span>
    </button>
  );
};

export default StatButton;
