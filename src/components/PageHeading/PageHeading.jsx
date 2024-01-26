import Proptypes from "prop-types";
import styles from "./PageHeading.module.css";

// CSS STYLES
const { pageHeadingDiv, pageHeading, arrowDiv } = styles;

const PageHeading = ({ imgURL, text, arrowGoTo }) => {
  return (
    <div
      className={pageHeadingDiv}
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <div className={pageHeading}>{text}</div>
      <div className={arrowDiv}>
        <a href= {`#${arrowGoTo}`}>
          <img src="/icons/triangleArrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};

PageHeading.propTypes = {
  imgURL: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  arrowGoTo: Proptypes.string.isRequired,
};

export default PageHeading;
