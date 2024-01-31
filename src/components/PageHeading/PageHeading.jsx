import Proptypes from "prop-types";
import styles from "./PageHeading.module.css";

// CSS STYLES
const { pageHeadingDiv, pageHeading } = styles;

const PageHeading = ({ imgURL, text }) => {
  return (
    <div
      className={pageHeadingDiv}
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <div className={pageHeading}>{text}</div>
    </div>
  );
};

PageHeading.propTypes = {
  imgURL: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
};

export default PageHeading;
