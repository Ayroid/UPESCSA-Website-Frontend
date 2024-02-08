import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./EventGrid.module.css";

import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { eventGrid, eventImage } = styles;

const EventGrid = ({ data, loading, error }) => {
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={eventGrid}>
      {data.map((event, index) =>
        screenWidth > 1000 ? (
          <div
            key={index}
            className={eventImage}
            style={{ gridColumn: event.spanx, gridRow: event.spany }}
          >
            <img src={event.imageURL} alt="event" />
          </div>
        ) : (
          <div
            key={index}
            className={eventImage}
            style={{ gridColumn: "span 1", gridRow: "span 1" }}
          >
            <img src={event.imageURL} alt="event" />
          </div>
        )
      )}
    </div>
  );
};

EventGrid.propTypes = {
  data: Proptypes.arrayOf(
    Proptypes.shape({
      img: Proptypes.string,
      spanx: Proptypes.string,
      spany: Proptypes.string,
    })
  ),
  loading: Proptypes.bool,
  error: Proptypes.bool,
};

export default EventGrid;
