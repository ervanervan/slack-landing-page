import React from "react";

type ButtonProps = {
  icon: React.ReactNode;
  count: number;
  size?: "small" | "medium" | "large" | "xlarge";
};

const sizeClasses = {
  small: "p-2 text-sm",
  medium: "p-3 text-base",
  large: "p-4 text-lg",
  xlarge: "p-5 text-xl",
};

const IconButton: React.FC<ButtonProps> = ({
  icon,
  count,
  size = "medium",
}) => {
  return (
    <button
      className={`flex items-center gap-2 border border-black rounded-full shadow-md hover:bg-gray-100 transition ${sizeClasses[size]}`}
    >
      <span className="text-yellow-500">{icon}</span>
      <span className="font-semibold text-gray-800">{count}</span>
    </button>
  );
};

export default IconButton;
