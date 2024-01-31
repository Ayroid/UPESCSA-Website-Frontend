import Proptypes from "prop-types";
import styles from "./TeamPageSwitch.module.css";

// CSS STYLES
const { pageSwitcherContainer, pageSwitcherButton } = styles;

const TeamPageSwitch = ({ activeTab, changeActiveTab }) => {
  return (
    <div className={pageSwitcherContainer}>
      <div
        className={pageSwitcherButton}
        style={{
          color: activeTab ? "var(--textDark)" : "var(--textDisabled)",
        }}
        onClick={() => changeActiveTab(true)}
      >
        Management
      </div>
      <hr />
      <div
        className={pageSwitcherButton}
        style={{
          color: !activeTab ? "var(--textDark)" : "var(--buttonDisabled)",
        }}
        onClick={() => changeActiveTab(false)}
      >
        Committees
      </div>
    </div>
  );
};

TeamPageSwitch.propTypes = {
  activeTab: Proptypes.bool.isRequired,
  changeActiveTab: Proptypes.func.isRequired,
};

export default TeamPageSwitch;
