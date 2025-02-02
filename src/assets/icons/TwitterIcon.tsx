import React from "react";

interface TwitterIconProps extends React.SVGProps<SVGSVGElement> {}

const TwitterIcon: React.FC<TwitterIconProps> = (props) => {
  return (
    <svg
      width="27"
      height="23"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread props for customization
    >
      <g filter="url(#filter0_dd_144_2143)">
        <path
          d="M22.125 3.12501C21.2871 3.71605 20.3593 4.16811 19.3775 4.46376C18.8505 3.85783 18.1502 3.42837 17.3712 3.23345C16.5921 3.03852 15.7721 3.08756 15.0218 3.37391C14.2716 3.66026 13.6274 4.17011 13.1764 4.83451C12.7253 5.49891 12.4892 6.2858 12.5 7.08876V7.96376C10.9623 8.00363 9.43861 7.6626 8.06463 6.97102C6.69065 6.27945 5.50903 5.25882 4.625 4.00001C4.625 4.00001 1.125 11.875 9 15.375C7.19796 16.5982 5.05126 17.2116 2.875 17.125C10.75 21.5 20.375 17.125 20.375 7.06251C20.3742 6.81878 20.3508 6.57565 20.305 6.33626C21.198 5.45557 21.8282 4.34363 22.125 3.12501Z"
          fill="white"
        />
        <path
          d="M23.0966 3.36163C23.1952 2.95663 23.0323 2.53293 22.6877 2.29837C22.3431 2.0638 21.8892 2.06758 21.5486 2.30785C20.9579 2.72451 20.3173 3.06401 19.6425 3.31873C19.061 2.8146 18.3667 2.45172 17.6139 2.26335C16.6361 2.01871 15.6069 2.08025 14.6652 2.43964C13.7236 2.79904 12.9151 3.43896 12.349 4.27285C11.8147 5.05985 11.5208 5.98379 11.5007 6.93237C10.4633 6.83761 9.44989 6.54874 8.51423 6.07779C7.28755 5.46036 6.23261 4.54915 5.44336 3.4253C5.23631 3.13048 4.8867 2.96982 4.52814 3.00471C4.16958 3.03961 3.8575 3.26467 3.71119 3.59387L4.625 4.00001C3.71119 3.59387 3.71098 3.59435 3.71075 3.59486L3.71023 3.59602L3.70896 3.59891L3.70549 3.60686L3.69496 3.63136C3.68641 3.65147 3.67486 3.67909 3.66078 3.71383C3.63264 3.7833 3.59431 3.88145 3.54956 4.00522C3.46018 4.25246 3.34448 4.60383 3.23302 5.03478C3.01132 5.89203 2.7999 7.08917 2.86041 8.42042C2.92112 9.75604 3.25702 11.2473 4.14932 12.6562C4.78482 13.6596 5.68334 14.5907 6.91113 15.3848C5.65773 15.9242 4.29281 16.1806 2.91474 16.1258C2.45202 16.1074 2.0372 16.4091 1.91215 16.855C1.7871 17.3009 1.98455 17.7743 2.38936 17.9992C6.60337 20.3403 11.3384 20.365 15.048 18.3906C18.7819 16.4032 21.375 12.4437 21.375 7.06251L21.375 7.05921C21.3746 6.93181 21.3692 6.80454 21.359 6.67769C22.1986 5.73277 22.7963 4.59479 23.0966 3.36163Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_144_2143"
          x="0.874786"
          y="1.11621"
          width="25.1934"
          height="21.7007"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_144_2143"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_144_2143"
            result="effect2_dropShadow_144_2143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_144_2143"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
