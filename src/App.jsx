import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import {
  Contest,
  Dashboard,
  Forums,
  Leaderboard,
  Learn,
  Sidebar,
  Upskill,
} from "./components";
import { BellSvg } from "./svg";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/upskill");
  }, [navigate]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <div className="content-header">
          <BellSvg width={35} height={35} />
          <div className="profile"></div>
        </div>
        <div className="content-page">
          <div className="content-container">
            <Routes>
              <Route element={<Dashboard />} path="/dashboard" />
              <Route element={<Learn />} path="/learn" />
              <Route element={<Forums />} path="/forums" />
              <Route element={<Upskill />} path="/upskill" />
              <Route element={<Contest />} path="/contest" />
              <Route element={<Leaderboard />} path="/leaderboard" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
