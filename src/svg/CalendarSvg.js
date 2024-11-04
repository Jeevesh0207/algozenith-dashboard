import * as React from "react";
const CalendarSvg = (props) => (
  <svg
    width={32}
    height={33}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.6667 9.83333V4.5M21.3334 9.83333V4.5M9.33336 15.1667H22.6667M6.6667 28.5H25.3334C26.0406 28.5 26.7189 28.219 27.219 27.719C27.7191 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.7191 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3334 7.16667H6.6667C5.95945 7.16667 5.28118 7.44762 4.78108 7.94772C4.28098 8.44781 4.00003 9.12609 4.00003 9.83333V25.8333C4.00003 26.5406 4.28098 27.2189 4.78108 27.719C5.28118 28.219 5.95945 28.5 6.6667 28.5Z"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CalendarSvg;
