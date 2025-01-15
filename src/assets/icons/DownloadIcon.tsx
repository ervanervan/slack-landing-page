import React from "react";

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_144_2094)">
        <path
          d="M6 12.75L9 15.75L12 12.75"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9V15.75"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.66 13.5674C16.312 13.1089 16.801 12.4546 17.056 11.6993C17.3109 10.9441 17.3186 10.1272 17.0778 9.36732C16.837 8.60742 16.3604 7.94402 15.717 7.47337C15.0737 7.00272 14.2971 6.74933 13.5 6.74995H12.555C12.3294 5.87085 11.9074 5.05439 11.3206 4.36201C10.7338 3.66963 9.99761 3.11939 9.1674 2.75271C8.3372 2.38604 7.43463 2.21247 6.52764 2.24509C5.62065 2.2777 4.73288 2.51565 3.93116 2.94102C3.12944 3.36639 2.43466 3.96809 1.89914 4.70082C1.36361 5.43356 1.00128 6.27823 0.839441 7.17126C0.677598 8.06429 0.720453 8.9824 0.96478 9.85646C1.20911 10.7305 1.64854 11.5378 2.25 12.2174"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_144_2094">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
