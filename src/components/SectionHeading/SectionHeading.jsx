import Proptypes from "prop-types";
import styles from "./SectionHeading.module.css";

// CSS STYLES
const { sectionHeadingDiv, sectionHeading, headingUnderline } = styles;

const SectionHeading = ({ heading, underlineColor, textColor }) => {
  return (
    <div className={sectionHeadingDiv} style={{ color: textColor }}>
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
  textColor: Proptypes.string,
};

export default SectionHeading;
