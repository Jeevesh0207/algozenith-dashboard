import * as React from "react";
const RightArrowSvg = (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} fill="white" fillOpacity={0.01} />
    <path
      d="M19 12L31 24L19 36"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default RightArrowSvg;
