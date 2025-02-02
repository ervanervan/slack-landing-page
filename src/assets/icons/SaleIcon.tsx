import React from "react";

const SaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.25 13.5V9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9V13.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H13.5C13.1022 15.75 12.7206 15.592 12.4393 15.3107C12.158 15.0294 12 14.6478 12 14.25V12C12 11.6022 12.158 11.2206 12.4393 10.9393C12.7206 10.658 13.1022 10.5 13.5 10.5H15.75V14.25ZM2.25 14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H4.5C4.89782 15.75 5.27936 15.592 5.56066 15.3107C5.84196 15.0294 6 14.6478 6 14.25V12C6 11.6022 5.84196 11.2206 5.56066 10.9393C5.27936 10.658 4.89782 10.5 4.5 10.5H2.25V14.25Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SaleIcon;
