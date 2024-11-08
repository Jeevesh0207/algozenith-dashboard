import * as React from "react";
const QuestionMarkSvg = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9707 12C11.7027 10.4467 13.6773 9.33333 16 9.33333C18.9467 9.33333 21.3333 11.124 21.3333 13.3333C21.3333 15.2 19.6293 16.7667 17.3253 17.2093C16.6027 17.348 16 17.9293 16 18.6667M16 22.6667H16.0133M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
      stroke="url(#paint0_linear_1_150)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_150"
        x1={5.87499}
        y1={4}
        x2={25.5625}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3467AE" />
        <stop offset={1} stopColor="#0C4969" />
      </linearGradient>
    </defs>
  </svg>
);
export default QuestionMarkSvg;
