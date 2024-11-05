import React, { useState, useRef } from "react";
import {
  ClockOutlineSvg,
  CopyPasteSvg,
  ContestSvg,
  LeftArrowSvg,
} from "../../../svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { partList, SvgRender } from "../../../data";

function Part({ id }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleDropMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="Part">
      <div className="part-header">
        <div className="details">
          <p>Part {id}</p>
          <div className="title">
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>
        <div className="right">
          <div className="info">
            <div className="col timestamp">
              <ClockOutlineSvg width={20} height={20} />
              <p>02:00:00</p>
            </div>
            <div className="col level">
              <ContestSvg width={20} height={20} />
              <p>Medium</p>
            </div>
            <div className="col count">
              <CopyPasteSvg width={20} height={20} />
              <p>5</p>
            </div>
            <div
              className={`col drop ${isMenuOpen ? "rotate" : ""}`}
              onClick={toggleDropMenu}
            >
              <LeftArrowSvg width={20} height={20} />
            </div>
          </div>
          <div className="complete">
            <p>45% Complete</p>
          </div>
        </div>
        <ProgressBar
          className="wrapper"
          barContainerClassName="container"
          completedClassName="barCompleted"
          labelClassName="label"
        />
      </div>
      <div
        className="part-container"
        ref={containerRef}
        style={{
          maxHeight: isMenuOpen ? `${containerRef.current.scrollHeight}px` : "0",
          overflow: "hidden",
        }}
      >
        {partList.map((item, index) => (
          <div className="row" key={index}>
            <div className="form">
              <div className="icon">{SvgRender[item.type]}</div>
              <p>{item.title}</p>
            </div>
            <div className="time-stamp">
              <ClockOutlineSvg width={20} height={20} />
              <p>10:00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Part;
