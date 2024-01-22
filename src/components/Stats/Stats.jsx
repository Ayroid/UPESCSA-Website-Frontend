import Proptypes from "prop-types";
import styles from "./Stats.module.css";

// CSS STYLES
const { statsContainer, statsNumber, statsText } = styles;

const Stats = ({ number, statText }) => {
  return (
    <div className={statsContainer}>
      <div className={statsNumber}>{number}</div>
      <div className={statsText}>{statText}</div>
    </div>
  );
};

Stats.propTypes = {
  number: Proptypes.string.isRequired,
  statText: Proptypes.node.isRequired,
};

export default Stats;
