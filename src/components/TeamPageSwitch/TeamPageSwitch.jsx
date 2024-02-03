import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./TeamPageSwitch.module.css";

// CSS STYLES
const { pageSwitcherContainer, pageSwitcherButton } = styles;

const TeamPageSwitch = ({ activeTab }) => {
  return (
    <div className={pageSwitcherContainer}>
      <Link to={"/team"}>
        <div
          className={pageSwitcherButton}
          style={{
            color: activeTab ? "var(--textDark)" : "var(--textDisabled)",
          }}
        >
          Management
        </div>
      </Link>
      <hr />
      <Link to={"/committee"}>
        <div
          className={pageSwitcherButton}
          style={{
            color: !activeTab ? "var(--textDark)" : "var(--buttonDisabled)",
          }}
        >
          Committees
        </div>
      </Link>
    </div>
  );
};

TeamPageSwitch.propTypes = {
  activeTab: Proptypes.bool.isRequired,
};

export default TeamPageSwitch;
