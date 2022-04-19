import React from "react";

interface ElipseProps {
  width?: number;
}

const Elipse: React.FC<ElipseProps> = ({ width = 886 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${width}`}
      fill="none"
      viewBox={`0 0 ${width} ${width}`}
    >
      <circle
        cx={`${width / 2}`}
        cy={`${width / 2}`}
        r={`${width / 2}`}
        fill="url(#paint0_radial_834_1292)"
      ></circle>
      <defs>
        <radialGradient
          id="paint0_radial_834_1292"
          cx="0"
          cy="0"
          r="1"
          gradientTransform={`rotate(90 0 ${width / 2}) scale(${width / 2})`}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5940" stopOpacity="0.43"></stop>
          <stop offset="1" stopColor="#FF5940" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Elipse;
