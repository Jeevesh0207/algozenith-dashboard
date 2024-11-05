import * as React from "react";
const CodingSvg = (props) => (
  <svg
    width={30}
    height={24}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3333 22.6667L17.6667 1.33334M23 6.66667L28.3333 12L23 17.3333M7 17.3333L1.66666 12L7 6.66667"
      stroke="url(#paint0_linear_1_162)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_162"
        x1={3.74998}
        y1={1.33334}
        x2={25.625}
        y2={1.33334}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3467AE" />
        <stop offset={1} stopColor="#0C4969" />
      </linearGradient>
    </defs>
  </svg>
);
export default CodingSvg;
