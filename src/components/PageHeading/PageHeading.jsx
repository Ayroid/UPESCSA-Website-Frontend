import Proptypes from "prop-types";
import styles from "./PageHeading.module.css";

// CSS STYLES
const { pageHeading } = styles;

const PageHeading = ({ text }) => {
  return <div className={pageHeading}>{text}</div>;
};

PageHeading.propTypes = {
  text: Proptypes.string.isRequired,
};

export default PageHeading;
