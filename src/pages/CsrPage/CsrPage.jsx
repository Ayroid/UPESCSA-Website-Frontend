import { useState, useEffect } from "react";
import styles from "./CsrPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";

// CSS STYLES
const { csrContainer, csrHeader, eventGrid, eventImage } = styles;

const CsrPage = () => {
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
    <div className={csrContainer}>
      <div className={csrHeader}>
        <PageHeading imgURL="/img/pageheaders/csr.png" text="CSR" />
      </div>
      <div className={eventGrid}>
        {eventsData.map((event, index) =>
          screenWidth > 1000 ? (
            <div
              key={index}
              className={eventImage}
              style={{ gridColumn: event.spanx, gridRow: event.spany }}
            >
              <img src={event.img} alt="event" />
            </div>
          ) : (
            <div
              key={index}
              className={eventImage}
              style={{ gridColumn: "span 1", gridRow: "span 1" }}
            >
              <img src={event.img} alt="event" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CsrPage;
