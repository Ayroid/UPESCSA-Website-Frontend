import Proptypes from "prop-types";
import styles from "./SectionHeading.module.css";

// CSS STYLES
const { sectionHeadingDiv, sectionHeading, headingUnderline } = styles;

const SectionHeading = ({ heading, underlineColor }) => {
  return (
    <div className={sectionHeadingDiv}>
      <h1 className={sectionHeading}>{heading}</h1>
      <hr
        className={headingUnderline}
        style={{ backgroundColor: underlineColor }}
      />
    </div>
  );
};

SectionHeading.propTypes = {
  heading: Proptypes.string.isRequired,
  underlineColor: Proptypes.string.isRequired,
};

export default SectionHeading;
