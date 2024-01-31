import { useState, useEffect } from "react";
import styles from "./EventsPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventYearSwitch from "../../components/EventYearSwitch/EventYearSwitch";
import EventGrid from "../../components/EventGrid/EventGrid";

// CSS STYLES
const { eventsPageContainer, eventsPageDiv } = styles;

// EVENTS DATA

// MOVE THIS DATA PART DIRECTLY TO THE CHILD COMPONENT

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

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [activeYear, setActiveYear] = useState(2024);
  const yearData = [2024, 2023, 2022, 2021, 2020, 2019, 2018];

  const changeYear = (year) => {
    setActiveYear(year);
  };

  return (
    <div className={eventsPageContainer}>
      <PageHeading imgURL="/img/pageheaders/events.png" text="EVENTS" />
      <div className={eventsPageDiv}>
        <EventYearSwitch
          yearData={yearData}
          activeYear={activeYear}
          changeYear={changeYear}
        />
        <EventGrid data={eventsData} year={activeYear} />
      </div>
    </div>
  );
};

export default EventsPage;
