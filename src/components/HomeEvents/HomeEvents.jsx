import styles from "./HomeEvents.module.css";

import SectionHeading from "../SectionHeading/SectionHeading";
import ShowMore from "../ShowMore/ShowMore";
import { useState, useEffect } from "react";

// CSS STYLES
const { homeEventsContainer, homeEventGrid, homeEventImage } = styles;

const HomeEvents = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // EVENTS DATA
  const eventsData = [
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 2",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
  ];

  return (
    <div className={homeEventsContainer} id="events">
      <SectionHeading
        heading="Events"
        underlineColor="var(--blueUnderLine)"
        textColor="var(--textDark)"
      />
      <div className={homeEventGrid}>
        {eventsData.map((event, index) =>
          screenWidth > 1000 ? (
            <div
              key={index}
              className={homeEventImage}
              style={{ gridColumn: event.spanx, gridRow: event.spany }}
            >
              <img src={event.img} alt="event" />
            </div>
          ) : (
            index < 4 && (
              <div
                key={index}
                className={homeEventImage}
                style={{ gridColumn: "span 1", gridRow: "span 1" }}
              >
                <img src={event.img} alt="event" />
              </div>
            )
          )
        )}
      </div>
      <ShowMore link="/events" />
    </div>
  );
};

export default HomeEvents;
