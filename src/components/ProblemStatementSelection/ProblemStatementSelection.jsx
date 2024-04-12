import React, { useState } from "react";
import styles from './ProblemStatementSelection.module.css';

const ProblemStatementSelection = ({ statement, onClose }) => {
  const [teamId, setTeamId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleConfirm = () => {
    console.log("Team ID:", teamId);
    console.log("Password:", pwd);
    onClose();
  };

  return (
    <div className={styles["popup-overlay"]}>
      <div className={styles["popup-box"]}>
        <h2 className={styles["popup-heading"]}>Book Your PS</h2>
        <div className={styles["popup-content"]}>
          <label htmlFor="teamId">Team ID:</label>
          <input
            type="text"
            id="teamId"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          />
        </div>
        <div className={styles["popup-content"]}>
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className={styles["popup-buttons"]}>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementSelection;
