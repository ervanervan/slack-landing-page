import React from "react";

type StatProps = {
  percentage: string;
  text: string;
  color: string;
};

const StatCard: React.FC<StatProps> = ({ percentage, text, color }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-start">
      <span
        className={`text-5xl font-extrabold font-karla mb-3 custom-text-shadow`}
        style={{ color }}
      >
        {percentage}
      </span>
      <p className="text-sm font-medium max-w-72 md:max-w-xs font-karla">
        {text}
      </p>
    </div>
  );
};

export default StatCard;
