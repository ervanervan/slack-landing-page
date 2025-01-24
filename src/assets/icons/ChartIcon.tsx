import React from "react";

type SVGProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ChartIcon: React.FC<SVGProps> = ({
  size = 18,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.52161 2.12927H17.1352V16.7428H2.52161V2.12927Z"
        fill="url(#paint0_linear_2662_224)"
      />
      <path
        d="M2.52161 2.12927H17.1352V16.7428H2.52161V2.12927Z"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M2.52164 14.3073H17.1352"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M2.52164 11.8716H17.1352"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M2.52164 9.43604H17.1352"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M2.52164 7.00049H17.1352"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M2.52164 4.56482H17.1352"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M14.6997 2.12927V16.7428"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M12.2638 2.12927V16.7428"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M9.8284 2.12927V16.7428"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M7.39294 2.12927V16.7428"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M4.95706 2.12927V16.7428"
        stroke="#575757"
        stroke-width="0.127869"
        stroke-miterlimit="10"
      />
      <path
        d="M3.34604 15.4264L6.11044 10.856L7.82753 13.031L10.6699 9.11329L13.3369 10.6343L16.1804 3.28613"
        stroke="#EC4431"
        stroke-width="0.511475"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.2"
        d="M16.7698 2.49461V16.3775H2.88695V2.49461H16.7698ZM17.1352 2.12927H2.52161V16.7428H17.1352V2.12927Z"
        fill="#424242"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2662_224"
          x1="9.82839"
          y1="2.17531"
          x2="9.82839"
          y2="16.6868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C8C9CA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ChartIcon;
