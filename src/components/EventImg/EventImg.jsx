import Proptypes from "prop-types";
import styles from "./EventImg.module.css";

// CSS STYLES
const { eventImage } = styles;

const EventImg = ({ imageURL, gridColumn = "span 1", gridRow = "span 1" }) => {
  return (
    <div className={eventImage} style={{ gridColumn, gridRow }}>
      <img loading="lazy" src={imageURL} alt="event" />
    </div>
  );
};

EventImg.propTypes = {
  imageURL: Proptypes.string.isRequired,
  gridColumn: Proptypes.string,
  gridRow: Proptypes.string,
};

export default EventImg;
