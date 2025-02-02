import React from "react";

interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon: React.FC<FacebookIconProps> = (props) => {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread props for customization
    >
      <g filter="url(#filter0_dd_144_2145)">
        <path
          d="M15.75 2.25H13.125C11.9647 2.25 10.8519 2.71094 10.0314 3.53141C9.21094 4.35188 8.75 5.46468 8.75 6.625V9.25H6.125V12.75H8.75V19.75H12.25V12.75H14.875L15.75 9.25H12.25V6.625C12.25 6.39294 12.3422 6.17038 12.5063 6.00628C12.6704 5.84219 12.8929 5.75 13.125 5.75H15.75V2.25Z"
          fill="white"
        />
        <path
          d="M16.75 2.25C16.75 1.69772 16.3023 1.25 15.75 1.25H13.125C11.6995 1.25 10.3323 1.81629 9.3243 2.8243C8.31629 3.83231 7.75 5.19946 7.75 6.625V8.25H6.125C5.57272 8.25 5.125 8.69772 5.125 9.25V12.75C5.125 13.3023 5.57272 13.75 6.125 13.75H7.75V19.75C7.75 20.3023 8.19772 20.75 8.75 20.75H12.25C12.8023 20.75 13.25 20.3023 13.25 19.75V13.75H14.875C15.3339 13.75 15.7339 13.4377 15.8451 12.9925L16.7201 9.49254C16.7948 9.19379 16.7277 8.8773 16.5382 8.63459C16.3487 8.39187 16.0579 8.25 15.75 8.25H13.25V6.75H15.75C16.3023 6.75 16.75 6.30228 16.75 5.75V2.25Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_144_2145"
          x="4.125"
          y="0.25"
          width="15.625"
          height="23.5"
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
            result="effect1_dropShadow_144_2145"
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
            in2="effect1_dropShadow_144_2145"
            result="effect2_dropShadow_144_2145"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_144_2145"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
