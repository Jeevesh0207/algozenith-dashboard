import React, { memo, useMemo, useState } from "react";
import "./Sidebar.css";
import {
  LogoSvg,
  MenuSvg,
  DashboardSvg,
  LearnSvg,
  ForumsSvg,
  UpskillSvg,
  ContestSvg,
  LeaderboardSvg,
  CrossSvg,
} from "../../svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [istoggleMenu, setisToggleMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);
  const Menu_List = useMemo(
    () => [
      {
        title: "Dashboard",
        logo: <DashboardSvg width={22} height={22} />,
        path: "/dashboard",
      },
      {
        title: "Learn",
        logo: <LearnSvg width={22} height={22} />,
        path: "/learn",
      },
      {
        title: "Forums",
        logo: <ForumsSvg width={22} height={22} />,
        path: "/forums",
      },
      {
        title: "Upskill",
        logo: <UpskillSvg width={22} height={22} />,
        path: "/upskill",
      },
      {
        title: "Contest",
        logo: <ContestSvg width={22} height={22} />,
        path: "/contest",
      },
      {
        title: "Leaderboard",
        logo: <LeaderboardSvg width={22} height={22} />,
        path: "/leaderboard",
      },
    ],
    []
  );

  const toggleMenu = () => {
    setisToggleMenu(!istoggleMenu);
    const Sidebar = document.getElementById("SidebarID");
    if (Sidebar.classList.contains("Sidebar_open")) {
      Sidebar.classList.remove("Sidebar_open");
    } else {
      Sidebar.classList.add("Sidebar_open");
    }
  };

  return (
    <div className="Sidebar" id="SidebarID">
      <div className="menu-logo">
        <div onClick={toggleMenu}>
          {!istoggleMenu ? <MenuSvg size={25} /> : <CrossSvg size={20} />}
        </div>
        <LogoSvg width={35} height={35} />
        <h1>AlgoZenith</h1>
      </div>
      <div className="menu-list">
        {Menu_List.map((item, index) => (
          <div className="box" key={index}>
            <Link to={item.path}>
              <MenuItem
                logo={item.logo}
                title={item.title}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuItem = memo(({ logo, title, index, activeIndex, setActiveIndex }) => (
  <div
    className={activeIndex === index ? "row active" : "row"}
    onClick={() => setActiveIndex(index)}
  >
    <div className="icon">{logo}</div>
    <div className="title">
      <p>{title}</p>
    </div>
  </div>
));

export default memo(Sidebar);
