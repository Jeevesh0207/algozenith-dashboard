import React,{useState} from "react";
import { ClockOutlineSvg, LeftArrowSvg, RightArrowSvg } from "../../../svg";


function Chapter({ chapterList, chapterIndex, setChapterIndex }) {
  const [ischapterToggle, setIsChapterToggle] = useState(false);
  
  const toggleVisiChapter = () => {
    setIsChapterToggle(!ischapterToggle);
    const Chapter = document.getElementById("ChapterID");
    if (Chapter.classList.contains("Chapter_open")) {
      Chapter.classList.remove("Chapter_open");
    } else {
      Chapter.classList.add("Chapter_open");
    }
  };

  return (
    <div className="Chapter" id="ChapterID">
      <div className="chapter-toggle" onClick={toggleVisiChapter}>
        <div className="icon">
          {ischapterToggle ? (
            <LeftArrowSvg width={25} height={25} />
          ) : (
            <RightArrowSvg width={25} height={25} />
          )}
        </div>
      </div>
      {chapterList.map((item, index) => (
        <div
          className={chapterIndex === index ? "box active" : "box"}
          key={index}
          onClick={() => setChapterIndex(index)}
        >
          <p>{item.title}</p>
          {chapterIndex === index && (
            <div className="time-stamp">
              <ClockOutlineSvg width={20} height={20} />
              <p>05:00:00</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Chapter;
