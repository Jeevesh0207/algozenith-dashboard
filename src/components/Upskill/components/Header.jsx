import React, { useState } from "react";
import { BriefcaseSvg, CalendarSvg, InformationSvg } from "../../../svg";

function Header() {
  const [activeIndex, setActiveIndex] = useState(1);
  const Options = [
    {
      title: "Mentor Sessions",
      logo: <CalendarSvg width={24} height={24} />,
    },
    {
      title: "Learning Material",
      logo: <BriefcaseSvg width={24} height={24} />,
    },
  ];
  return (
    <div className="Header">
      <div className="options">
        {Options.map((item, index) => (
          <p
            className={activeIndex === index ? "active" : ""}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {item.logo}
            <span>{item.title}</span>
          </p>
        ))}
      </div>
      <div className="help">
        <p>
          <InformationSvg width={24} height={24} />
          <span>How it works</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
