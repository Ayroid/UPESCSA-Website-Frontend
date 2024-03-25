import Proptypes from "prop-types";
import { useState } from "react";

import styles from "./TimelineMid.module.css";

const {
  mainDiv,
  sectionLine,
  sectionConnectDot,
  sectionContent,
  sectionTime,
  sectionHeading,
  sectionDate,
  sectionImage,
} = styles;

const TimelineMid = ({
  timelineImage,
  timelineHeading,
  timelineDate,
  timelineTime,
  reverseOrder,
  timelineStart,
  height,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  if (screenWidth < 768) {
    reverseOrder = false;
  }

  return (
    <div
      className={mainDiv}
      style={{
        flexDirection:
          screenWidth < 768 ? "column" : reverseOrder ? "row-reverse" : "row",
      }}
    >
      <div className={sectionImage}>
        <img src={timelineImage} alt="timeline" height={height} />
      </div>
      <div
        className={sectionLine}
        style={{
          background:
            timelineStart == null
              ? "var(--hacktextLight)"
              : timelineStart
              ? "linear-gradient(90deg, var(--hacktextDark) 0%, var(--hacktextLight) 100%)"
              : "linear-gradient(90deg, var(--hacktextLight) 0%, var(--hacktextDark) 100%)",
        }}
      >
        <div className={sectionConnectDot}></div>
      </div>
      <div className={sectionContent}>
        <div className={sectionDate}>
          <p>{timelineDate}</p>
        </div>
        <div className={sectionTime}>
          <h4>{timelineTime}</h4>
        </div>
        <div className={sectionHeading}>
          <h3>{timelineHeading}</h3>
        </div>
      </div>
    </div>
  );
};

TimelineMid.propTypes = {
  timelineImage: Proptypes.string.isRequired,
  timelineHeading: Proptypes.string.isRequired,
  timelineDate: Proptypes.string.isRequired,
  timelineTime: Proptypes.string.isRequired,
  reverseOrder: Proptypes.bool.isRequired,
  timelineStart: Proptypes.bool,
  height: Proptypes.string,
};

export default TimelineMid;
