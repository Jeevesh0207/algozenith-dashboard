import React, { useState } from "react";
import "./Upskill.css";
import { Header } from "./components";
import Chapter from "./components/Chapter";
import { chapterList } from "../../data";

function Upskill() {
  const [chapterIndex, setChapterIndex] = useState(0);
  
  return (
    <div className="Upskill">
      <Header />
      <div className="lessons-container">
        <Chapter
          chapterList={chapterList}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
        />
      </div>
    </div>
  );
}

export default Upskill;
