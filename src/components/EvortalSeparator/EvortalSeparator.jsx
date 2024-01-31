import Proptypes from "prop-types";
import styles from "./EvortalSeparator.module.css";

// CSS STYLES
const { evortalSeparatorContainer, separatorText, separatorHr } = styles;

const EvortalSeparator = ({ text }) => {
  return (
    <div className={evortalSeparatorContainer}>
      <p className={separatorText}>{text}</p>
      <hr className={separatorHr} />
    </div>
  );
};

EvortalSeparator.propTypes = {
  text: Proptypes.string.isRequired,
};

export default EvortalSeparator;
