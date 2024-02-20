import Proptypes from "prop-types";
import styles from "./EventYearSwitch.module.css";

// CSS STYLES
const { eventYearSwitchContainer, eventYearSwitchButton } = styles;

const EventYearSwitch = ({ yearData, activeYear, changeYear }) => {
  return (
    <div className={eventYearSwitchContainer}>
      {yearData.map((year) =>
        activeYear === year ? (
          <button
            key={year}
            className={eventYearSwitchButton}
            style={{
              fontSize: "1.25rem",
              color: "var(--textDark)",
              fontWeight: "900",
            }}
          >
            {year}
          </button>
        ) : (
          <button
            key={year}
            className={eventYearSwitchButton}
            onClick={() => changeYear(year)}
            style={{ color: "var(--textDisabled)" }}
          >
            {year}
          </button>
        )
      )}
    </div>
  );
};

EventYearSwitch.propTypes = {
  yearData: Proptypes.arrayOf(Proptypes.number),
  activeYear: Proptypes.number.isRequired,
  changeYear: Proptypes.func.isRequired,
};

export default EventYearSwitch;
