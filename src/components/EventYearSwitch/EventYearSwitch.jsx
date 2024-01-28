import { useState } from "react";
import styles from "./EventYearSwitch.module.css";

// CSS STYLES
const { eventYearSwitchContainer, eventYearSwitchButton } = styles;

const EventYearSwitch = () => {
  const [activeYear, setActiveYear] = useState(2024);
  const yearData = [2024, 2023, 2022, 2021, 2020, 2019, 2018];

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
              fontWeight: "600",
            }}
          >
            {year}
          </button>
        ) : (
          <button
            key={year}
            className={eventYearSwitchButton}
            onClick={() => setActiveYear(year)}
            style={{ color: "var(--textDisabled)" }}
          >
            {year}
          </button>
        )
      )}
    </div>
  );
};

export default EventYearSwitch;
