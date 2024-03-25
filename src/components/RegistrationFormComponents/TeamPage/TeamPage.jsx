import { useState } from "react";

import InputField from "../InputField/InputField";
import DropDownSelectField from "../DropDownSelectField/DropDownSelectField";

import styles from "./TeamPage.module.css";

const { mainDiv, formDiv, errorMessage } = styles;

import { VALIDATENAME } from "../../../utils/registrationValidations";

const TeamPage = () => {
  // STATES

  const [paymentPage, setPaymentPage] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("2");

  // UPDATE FUNCTIONS

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const updateTeamSize = (e) => {
    setTeamSize(e.target.value);
  };

  // VALIDATION STATES

  const [isTeamNameValid, setIsTeamNameValid] = useState(true);

  // VALIDATION FUNCTIONS

  const validateTeamName = () => {
    return VALIDATENAME(teamName, setIsTeamNameValid);
  };

  return (
    <div className={mainDiv}>
      <form
        className={formDiv}
        encType="multipart/form-data"
        onSubmit={() => console.log("submit")}
      >
        {/* TEAM DETAILS SECTION START */}
        {!paymentPage && (
          <div className={formDiv}>
            <h1 className="header">Team Details</h1>
            <InputField
              id="teamName"
              type="text"
              inputLabel="Team Name"
              value={teamName}
              valueUpdater={updateTeamName}
              required={true}
            />
            {!isTeamNameValid && (
              <span className={errorMessage}>Invalid Name</span>
            )}

            <DropDownSelectField
              id="teamSize"
              value={teamSize}
              valueUpdater={updateTeamSize}
              inputLabel="Team Size"
              required={true}
              options={["3", "4"]}
              defaultOption="2"
            />

            <DropDownSelectField
              id="teamCategory"
              value={teamSize}
              valueUpdater={updateTeamSize}
              inputLabel="Team Category"
              required={true}
              options={[
                "All UPES-CSA Members",
                "Mixed Team",
                "All Non-UPES-CSA Members",
              ]}
              defaultOption="Choose"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default TeamPage;
