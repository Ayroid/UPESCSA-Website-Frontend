import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./EventRegistrationPage.module.css";
import InputField from "../../components/InputField/InputField";
import DropDownSelectField from "../../components/DropDownSelectField/DropDownSelectField";

import {
  VALIDATENAME,
  VALIDATEEMAIL,
  VALIDATEPHONE,
  VALIDATECOURSE,
  VALIDATESAPID,
  VALIDATECSAMEMBER,
  VALIDATECSAID,
  VALIDATEYEAROFSTUDY,
} from "../../utils/registrationValidations";
import FormLoading from "../../components/FormLoading/FormLoading";
import FileSelect from "../../components/FileSelect/FileSelect";

const {
  mainDiv,
  backArrow,
  heading,
  eventsContainer,
  eventImage,
  eventDescripton,
  eventHeading,
  eventText,
  submitButton,
  sectionHeading,
  eventDetailsDiv,
  eventDetail,
  formDiv,
  formContainer,
  memberSection,
  errorMessage,
  loadingDiv,
  paymentQRDiv,
} = styles;

const FrenzyPitchRegistrationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const eventDetails = {
    eventRegistrationURL: `${
      import.meta.env.VITE_SERVER_URL
    }/api/event/register/frenzypitch`,
    eventImageURL: "/img/events/live/FRENZY_PITCH-01.jpg",
    eventHeading: "Frenzy Pitch",
    eventText:
      "A competition that challenges teams to rethink and redesign ordinary household items into innovative products, with a wildcard challenge to push your creative boundaries.",
    eventMode: "Offline",
    eventTeamSize: "2-4",
    eventRegistrationFee: "All-CSA: 60Rs | Non-CSA: 100Rs",
    eventDate: "19 Mar",
    whatsGroup: "EkQUCUaPhKj8Na5F1cFEMT",
  };

  // FORM STATES

  const [paymentPage, setPaymentPage] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [frenzyPitchTransactionSS, setFrenzyPitchTransactionSS] =
    useState(null);

  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("2");

  const [teamLeadName, setTeamLeadName] = useState("");
  const [teamLeadEmail, setTeamLeadEmail] = useState("");
  const [teamLeadPhone, setTeamLeadPhone] = useState("");
  const [teamLeadCourse, setTeamLeadCourse] = useState("");
  const [teamLeadYearOfStudy, setTeamLeadYearOfStudy] = useState("");
  const [teamLeadSapID, setTeamLeadSapID] = useState("");
  const [teamLeadCSAMember, setTeamLeadCSAMember] = useState("");
  const [teamLeadCSAID, setTeamLeadCSAID] = useState("");

  const [memberTwoName, setMemberTwoName] = useState("");
  const [memberTwoEmail, setMemberTwoEmail] = useState("");
  const [memberTwoPhone, setMemberTwoPhone] = useState("");
  const [memberTwoCourse, setMemberTwoCourse] = useState("");
  const [memberTwoYearOfStudy, setMemberTwoYearOfStudy] = useState("");
  const [memberTwoSapID, setMemberTwoSapID] = useState("");
  const [memberTwoCSAMember, setMemberTwoCSAMember] = useState("");
  const [memberTwoCSAID, setMemberTwoCSAID] = useState("");

  const [memberThreeName, setMemberThreeName] = useState("");
  const [memberThreeEmail, setMemberThreeEmail] = useState("");
  const [memberThreePhone, setMemberThreePhone] = useState("");
  const [memberThreeCourse, setMemberThreeCourse] = useState("");
  const [memberThreeYearOfStudy, setMemberThreeYearOfStudy] = useState("");
  const [memberThreeSapID, setMemberThreeSapID] = useState("");
  const [memberThreeCSAMember, setMemberThreeCSAMember] = useState("");
  const [memberThreeCSAID, setMemberThreeCSAID] = useState("");

  const [memberFourName, setMemberFourName] = useState("");
  const [memberFourEmail, setMemberFourEmail] = useState("");
  const [memberFourPhone, setMemberFourPhone] = useState("");
  const [memberFourCourse, setMemberFourCourse] = useState("");
  const [memberFourYearOfStudy, setMemberFourYearOfStudy] = useState("");
  const [memberFourSapID, setMemberFourSapID] = useState("");
  const [memberFourCSAMember, setMemberFourCSAMember] = useState("");
  const [memberFourCSAID, setMemberFourCSAID] = useState("");

  // UPDATE FUNCTIONS

  const updateTransactionID = (e) => {
    setTransactionID(e.target.value);
  };
  const updateTransactionSS = (e) => {
    setFrenzyPitchTransactionSS(e.target.files[0]);
  };

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const updateTeamSize = (e) => {
    setTeamSize(e.target.value);
  };

  const updateTeamLeadName = (e) => {
    setTeamLeadName(e.target.value);
  };
  const updateTeamLeadEmail = (e) => {
    setTeamLeadEmail(e.target.value);
  };
  const updateTeamLeadPhone = (e) => {
    setTeamLeadPhone(e.target.value);
  };
  const updateTeamLeadCourse = (e) => {
    setTeamLeadCourse(e.target.value);
  };
  const updateTeamLeadYearOfStudy = (e) => {
    setTeamLeadYearOfStudy(e.target.value);
  };
  const updateTeamLeadSapID = (e) => {
    setTeamLeadSapID(e.target.value);
  };
  const updateTeamLeadCSAMember = (e) => {
    setTeamLeadCSAMember(e.target.value);
  };
  const updateTeamLeadCSAID = (e) => {
    setTeamLeadCSAID(e.target.value);
  };

  const updateMemberTwoName = (e) => {
    setMemberTwoName(e.target.value);
  };
  const updateMemberTwoEmail = (e) => {
    setMemberTwoEmail(e.target.value);
  };
  const updateMemberTwoPhone = (e) => {
    setMemberTwoPhone(e.target.value);
  };
  const updateMemberTwoCourse = (e) => {
    setMemberTwoCourse(e.target.value);
  };
  const updateMemberTwoYearOfStudy = (e) => {
    setMemberTwoYearOfStudy(e.target.value);
  };
  const updateMemberTwoSapID = (e) => {
    setMemberTwoSapID(e.target.value);
  };
  const updateMemberTwoCSAMember = (e) => {
    setMemberTwoCSAMember(e.target.value);
  };
  const updateMemberTwoCSAID = (e) => {
    setMemberTwoCSAID(e.target.value);
  };

  const updateMemberThreeName = (e) => {
    setMemberThreeName(e.target.value);
  };
  const updateMemberThreeEmail = (e) => {
    setMemberThreeEmail(e.target.value);
  };
  const updateMemberThreePhone = (e) => {
    setMemberThreePhone(e.target.value);
  };
  const updateMemberThreeCourse = (e) => {
    setMemberThreeCourse(e.target.value);
  };
  const updateMemberThreeYearOfStudy = (e) => {
    setMemberThreeYearOfStudy(e.target.value);
  };
  const updateMemberThreeSapID = (e) => {
    setMemberThreeSapID(e.target.value);
  };
  const updateMemberThreeCSAMember = (e) => {
    setMemberThreeCSAMember(e.target.value);
  };
  const updateMemberThreeCSAID = (e) => {
    setMemberThreeCSAID(e.target.value);
  };

  const updateMemberFourName = (e) => {
    setMemberFourName(e.target.value);
  };
  const updateMemberFourEmail = (e) => {
    setMemberFourEmail(e.target.value);
  };
  const updateMemberFourPhone = (e) => {
    setMemberFourPhone(e.target.value);
  };
  const updateMemberFourCourse = (e) => {
    setMemberFourCourse(e.target.value);
  };
  const updateMemberFourYearOfStudy = (e) => {
    setMemberFourYearOfStudy(e.target.value);
  };
  const updateMemberFourSapID = (e) => {
    setMemberFourSapID(e.target.value);
  };
  const updateMemberFourCSAMember = (e) => {
    setMemberFourCSAMember(e.target.value);
  };
  const updateMemberFourCSAID = (e) => {
    setMemberFourCSAID(e.target.value);
  };

  // VALIDATION STATES

  const [isTeamNameValid, setIsTeamNameValid] = useState(true);

  const [isTeamLeadNameValid, setIsTeamLeadNameValid] = useState(true);
  const [isTeamLeadEmailValid, setIsTeamLeadEmailValid] = useState(true);
  const [isTeamLeadPhoneValid, setIsTeamLeadPhoneValid] = useState(true);
  const [isTeamLeadCourseValid, setIsTeamLeadCourseValid] = useState(true);
  const [isTeamLeadYearOfStudyValid, setIsTeamLeadYearOfStudyValid] =
    useState(true);
  const [isTeamLeadSapIDValid, setIsTeamLeadSapIDValid] = useState(true);
  const [isTeamLeadCSAMemberValid, setIsTeamLeadCSAMemberValid] =
    useState(true);
  const [isTeamLeadCSAIDValid, setIsTeamLeadCSAIDValid] = useState(true);

  const [isMemberTwoNameValid, setIsMemberTwoNameValid] = useState(true);
  const [isMemberTwoEmailValid, setIsMemberTwoEmailValid] = useState(true);
  const [isMemberTwoPhoneValid, setIsMemberTwoPhoneValid] = useState(true);
  const [isMemberTwoCourseValid, setIsMemberTwoCourseValid] = useState(true);
  const [isMemberTwoYearOfStudyValid, setIsMemberTwoYearOfStudyValid] =
    useState(true);
  const [isMemberTwoSapIDValid, setIsMemberTwoSapIDValid] = useState(true);
  const [isMemberTwoCSAMemberValid, setIsMemberTwoCSAMemberValid] =
    useState(true);
  const [isMemberTwoCSAIDValid, setIsMemberTwoCSAIDValid] = useState(true);

  const [isMemberThreeNameValid, setIsMemberThreeNameValid] = useState(true);
  const [isMemberThreeEmailValid, setIsMemberThreeEmailValid] = useState(true);
  const [isMemberThreePhoneValid, setIsMemberThreePhoneValid] = useState(true);
  const [isMemberThreeCourseValid, setIsMemberThreeCourseValid] =
    useState(true);
  const [isMemberThreeYearOfStudyValid, setIsMemberThreeYearOfStudyValid] =
    useState(true);
  const [isMemberThreeSapIDValid, setIsMemberThreeSapIDValid] = useState(true);
  const [isMemberThreeCSAMemberValid, setIsMemberThreeCSAMemberValid] =
    useState(true);
  const [isMemberThreeCSAIDValid, setIsMemberThreeCSAIDValid] = useState(true);

  const [isMemberFourNameValid, setIsMemberFourNameValid] = useState(true);
  const [isMemberFourEmailValid, setIsMemberFourEmailValid] = useState(true);
  const [isMemberFourPhoneValid, setIsMemberFourPhoneValid] = useState(true);
  const [isMemberFourCourseValid, setIsMemberFourCourseValid] = useState(true);
  const [isMemberFourYearOfStudyValid, setIsMemberFourYearOfStudyValid] =
    useState(true);
  const [isMemberFourSapIDValid, setIsMemberFourSapIDValid] = useState(true);
  const [isMemberFourCSAMemberValid, setIsMemberFourCSAMemberValid] =
    useState(true);
  const [isMemberFourCSAIDValid, setIsMemberFourCSAIDValid] = useState(true);

  // VALIDATION FUNCTIONS

  const validateTeamName = () => {
    return VALIDATENAME(teamName, setIsTeamNameValid);
  };

  const validateTeamLead = () => {
    const teamLeadNameValid = VALIDATENAME(
      teamLeadName,
      setIsTeamLeadNameValid
    );
    const teamLeadEmailValid = VALIDATEEMAIL(
      teamLeadEmail,
      setIsTeamLeadEmailValid
    );
    const teamLeadPhoneValid = VALIDATEPHONE(
      teamLeadPhone,
      setIsTeamLeadPhoneValid
    );
    const teamLeadCourseValid = VALIDATECOURSE(
      teamLeadCourse,
      setIsTeamLeadCourseValid
    );
    const teamLeadYearOfStudyValid = VALIDATEYEAROFSTUDY(
      teamLeadYearOfStudy,
      setIsTeamLeadYearOfStudyValid
    );
    const teamLeadSapIDValid = VALIDATESAPID(
      teamLeadSapID,
      setIsTeamLeadSapIDValid
    );
    const teamLeadCSAMemberValid = VALIDATECSAMEMBER(
      teamLeadCSAMember,
      setIsTeamLeadCSAMemberValid
    );

    if (
      teamLeadNameValid &&
      teamLeadEmailValid &&
      teamLeadPhoneValid &&
      teamLeadCourseValid &&
      teamLeadYearOfStudyValid &&
      teamLeadSapIDValid &&
      teamLeadCSAMemberValid
    ) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return teamLeadCSAMember === "yes"
        ? VALIDATECSAID(teamLeadCSAID, setIsTeamLeadCSAIDValid)
        : true;
    }
  };

  // MEMBER TWO VALIDATION

  const validateMemberTwo = () => {
    const memberTwoNameValid = VALIDATENAME(
      memberTwoName,
      setIsMemberTwoNameValid
    );
    const memberTwoEmailValid = VALIDATEEMAIL(
      memberTwoEmail,
      setIsMemberTwoEmailValid
    );
    const memberTwoPhoneValid = VALIDATEPHONE(
      memberTwoPhone,
      setIsMemberTwoPhoneValid
    );
    const memberTwoCourseValid = VALIDATECOURSE(
      memberTwoCourse,
      setIsMemberTwoCourseValid
    );
    const memberTwoYearOfStudyValid = VALIDATEYEAROFSTUDY(
      memberTwoYearOfStudy,
      setIsMemberTwoYearOfStudyValid
    );
    const memberTwoSapIDValid = VALIDATESAPID(
      memberTwoSapID,
      setIsMemberTwoSapIDValid
    );
    const memberTwoCSAMemberValid = VALIDATECSAMEMBER(
      memberTwoCSAMember,
      setIsMemberTwoCSAMemberValid
    );

    if (
      memberTwoNameValid &&
      memberTwoEmailValid &&
      memberTwoPhoneValid &&
      memberTwoCourseValid &&
      memberTwoYearOfStudyValid &&
      memberTwoSapIDValid &&
      memberTwoCSAMemberValid
    ) {
      return memberTwoCSAMember === "yes"
        ? VALIDATECSAID(memberTwoCSAID, setIsMemberTwoCSAIDValid)
        : true;
    }
  };

  // MEMBER THREE VALIDATION

  const validateMemberThree = () => {
    const memberThreeNameValid = VALIDATENAME(
      memberThreeName,
      setIsMemberThreeNameValid
    );
    const memberThreeEmailValid = VALIDATEEMAIL(
      memberThreeEmail,
      setIsMemberThreeEmailValid
    );
    const memberThreePhoneValid = VALIDATEPHONE(
      memberThreePhone,
      setIsMemberThreePhoneValid
    );
    const memberThreeCourseValid = VALIDATECOURSE(
      memberThreeCourse,
      setIsMemberThreeCourseValid
    );
    const memberThreeYearOfStudyValid = VALIDATEYEAROFSTUDY(
      memberThreeYearOfStudy,
      setIsMemberThreeYearOfStudyValid
    );
    const memberThreeSapIDValid = VALIDATESAPID(
      memberThreeSapID,
      setIsMemberThreeSapIDValid
    );
    const memberThreeCSAMemberValid = VALIDATECSAMEMBER(
      memberThreeCSAMember,
      setIsMemberThreeCSAMemberValid
    );

    if (
      memberThreeNameValid &&
      memberThreeEmailValid &&
      memberThreePhoneValid &&
      memberThreeCourseValid &&
      memberThreeYearOfStudyValid &&
      memberThreeSapIDValid &&
      memberThreeCSAMemberValid
    ) {
      return memberThreeCSAMember === "yes"
        ? VALIDATECSAID(memberThreeCSAID, setIsMemberThreeCSAIDValid)
        : true;
    }
  };

  // MEMBER FOUR VALIDATION

  const validateMemberFour = () => {
    const memberFourNameValid = VALIDATENAME(
      memberFourName,
      setIsMemberFourNameValid
    );
    const memberFourEmailValid = VALIDATEEMAIL(
      memberFourEmail,
      setIsMemberFourEmailValid
    );
    const memberFourPhoneValid = VALIDATEPHONE(
      memberFourPhone,
      setIsMemberFourPhoneValid
    );
    const memberFourCourseValid = VALIDATECOURSE(
      memberFourCourse,
      setIsMemberFourCourseValid
    );
    const memberFourYearOfStudyValid = VALIDATEYEAROFSTUDY(
      memberFourYearOfStudy,
      setIsMemberFourYearOfStudyValid
    );
    const memberFourSapIDValid = VALIDATESAPID(
      memberFourSapID,
      setIsMemberFourSapIDValid
    );
    const memberFourCSAMemberValid = VALIDATECSAMEMBER(
      memberFourCSAMember,
      setIsMemberFourCSAMemberValid
    );

    if (
      memberFourNameValid &&
      memberFourEmailValid &&
      memberFourPhoneValid &&
      memberFourCourseValid &&
      memberFourYearOfStudyValid &&
      memberFourSapIDValid &&
      memberFourCSAMemberValid
    ) {
      return memberFourCSAMember === "yes"
        ? VALIDATECSAID(memberFourCSAID, setIsMemberFourCSAIDValid)
        : true;
    }
  };

  const submitFormOne = (e) => {
    e.preventDefault();
    if (validateTeamName() && validateTeamLead() && validateMemberTwo()) {
      if (teamSize === "3") {
        setPaymentPage(validateMemberThree());
      } else if (teamSize === "4") {
        setPaymentPage(validateMemberThree() && validateMemberFour());
      } else {
        setPaymentPage(true);
      }
    }
  };

  const submitFormFinal = (e) => {
    e.preventDefault();

    // VALIDATION

    if (validateTeamName() && validateTeamLead() && validateMemberTwo()) {
      if (teamSize === "3" && !validateMemberThree()) {
        return;
      }
      if (
        teamSize === "4" &&
        (!validateMemberThree() || !validateMemberFour())
      ) {
        return;
      }

      setLoading(true);

      const data = {
        teamName,
        teamSize,
        teamLeadName,
        teamLeadEmail,
        teamLeadPhone,
        teamLeadCourse,
        teamLeadYearOfStudy,
        teamLeadSapID,
        teamLeadCSAMember,
        teamLeadCSAID,
        memberTwoName,
        memberTwoEmail,
        memberTwoPhone,
        memberTwoCourse,
        memberTwoYearOfStudy,
        memberTwoSapID,
        memberTwoCSAMember,
        memberTwoCSAID,
        memberThreeName,
        memberThreeEmail,
        memberThreePhone,
        memberThreeCourse,
        memberThreeYearOfStudy,
        memberThreeSapID,
        memberThreeCSAMember,
        memberThreeCSAID,
        memberFourName,
        memberFourEmail,
        memberFourPhone,
        memberFourCourse,
        memberFourYearOfStudy,
        memberFourSapID,
        memberFourCSAMember,
        memberFourCSAID,
        transactionID,
      };

      const finalData = new FormData();

      for (const key in data) {
        finalData.append(key, data[key]);
      }

      finalData.append("frenzyPitchTransactionSS", frenzyPitchTransactionSS);

      axios
        .post(eventDetails.eventRegistrationURL, finalData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          navigate("/registrationSuccess?wg=" + eventDetails.whatsGroup);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}
      <div className={eventsContainer}>
        <div className={eventImage}>
          <img
            loading="lazy"
            src={eventDetails.eventImageURL}
            alt="eventPoster"
          />
        </div>
        <div className={eventDetailsDiv}>
          <div className={eventDetail}>{eventDetails.eventMode}</div>
          <div className={eventDetail}>
            <img
              loading="lazy"
              src="/icons/teamSize.png"
              alt=""
              style={{ marginTop: "-0.25rem" }}
            />
            <p>{eventDetails.eventTeamSize}</p>
          </div>
          <div className={eventDetail}>
            <img loading="lazy" src="/icons/date.png" alt="" />
            <p>{eventDetails.eventDate}</p>
          </div>
          <div className={eventDetail} style={{ width: "100%" }}>
            <img loading="lazy" src="/icons/registrationFee.png" alt="" />
            <p>{eventDetails.eventRegistrationFee}</p>
          </div>
        </div>
        <div className={eventDescripton}>
          <h4 className={eventHeading}>Event Details</h4>
          <p className={eventText}>{eventDetails.eventText}</p>
        </div>
      </div>
      <div className={formContainer}>
        <h2 className={heading}>{eventDetails.eventHeading}</h2>
        <div className={styles.divider}></div>

        <form
          className={formDiv}
          encType="multipart/form-data"
          onSubmit={submitFormFinal}
        >
          {/* TEAM DETAILS SECTION START */}
          {!paymentPage ? (
            <div className={formDiv}>
              <h3 className={sectionHeading}>Team Details</h3>

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

              {/* TEAM LEAD SECTION START */}

              <div className={memberSection}>
                <h3 className={sectionHeading}>Team Lead</h3>

                <InputField
                  id="teamLeadName"
                  type="text"
                  inputLabel="Name"
                  value={teamLeadName}
                  valueUpdater={updateTeamLeadName}
                  required={true}
                />
                {!isTeamLeadNameValid && (
                  <span className={errorMessage}>Invalid Name</span>
                )}
                <InputField
                  id="teamLeadEmail"
                  type="email"
                  inputLabel="Email"
                  value={teamLeadEmail}
                  valueUpdater={updateTeamLeadEmail}
                  required={true}
                />
                {!isTeamLeadEmailValid && (
                  <span className={errorMessage}>Invalid Email</span>
                )}
                <InputField
                  id="teamLeadPhone"
                  type="text"
                  inputLabel="Phone Number"
                  value={teamLeadPhone}
                  valueUpdater={updateTeamLeadPhone}
                  required={true}
                />
                {!isTeamLeadPhoneValid && (
                  <span className={errorMessage}>Invalid Phone</span>
                )}
                <InputField
                  id="teamLeadSapID"
                  type="text"
                  inputLabel="SAP ID"
                  value={teamLeadSapID}
                  valueUpdater={updateTeamLeadSapID}
                  required={true}
                />
                {!isTeamLeadSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="teamLeadCSAMember"
                  value={teamLeadCSAMember}
                  valueUpdater={updateTeamLeadCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={true}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isTeamLeadCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )}
                {teamLeadCSAMember === "yes" && (
                  <InputField
                    id="teamLeadCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={teamLeadCSAID}
                    valueUpdater={updateTeamLeadCSAID}
                    required={teamLeadCSAMember === "yes"}
                  />
                )}
                {!isTeamLeadCSAIDValid && (
                  <span className={errorMessage}>Invalid CSA ID</span>
                )}
                <InputField
                  id="teamLeadCourse"
                  type="text"
                  inputLabel="Course"
                  value={teamLeadCourse}
                  valueUpdater={updateTeamLeadCourse}
                  required={true}
                />
                {!isTeamLeadCourseValid && (
                  <span className={errorMessage}>Invalid Course</span>
                )}
                <InputField
                  id="teamLeadYearOfStudy"
                  type="text"
                  inputLabel="Year of Study"
                  value={teamLeadYearOfStudy}
                  valueUpdater={updateTeamLeadYearOfStudy}
                  required={true}
                />
                {!isTeamLeadYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* TEAM LEAD SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              {/* MEMBER TWO SECTION START */}

              <div className={memberSection}>
                <h3 className={sectionHeading}>Member Two</h3>

                <InputField
                  id="memberTwoName"
                  type="text"
                  inputLabel="Name"
                  value={memberTwoName}
                  valueUpdater={updateMemberTwoName}
                  required={true}
                />
                {!isMemberTwoNameValid && (
                  <span className={errorMessage}>Invalid Name</span>
                )}
                <InputField
                  id="memberTwoEmail"
                  type="email"
                  inputLabel="Email"
                  value={memberTwoEmail}
                  valueUpdater={updateMemberTwoEmail}
                  required={true}
                />
                {!isMemberTwoEmailValid && (
                  <span className={errorMessage}>Invalid Email</span>
                )}
                <InputField
                  id="memberTwoPhone"
                  type="text"
                  inputLabel="Phone Number"
                  value={memberTwoPhone}
                  valueUpdater={updateMemberTwoPhone}
                  required={true}
                />
                {!isMemberTwoPhoneValid && (
                  <span className={errorMessage}>Invalid Phone</span>
                )}
                <InputField
                  id="memberTwoSapID"
                  type="text"
                  inputLabel="SAP ID"
                  value={memberTwoSapID}
                  valueUpdater={updateMemberTwoSapID}
                  required={true}
                />
                {!isMemberTwoSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="memberTwoCSAMember"
                  value={memberTwoCSAMember}
                  valueUpdater={updateMemberTwoCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={true}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isMemberTwoCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )}
                {memberTwoCSAMember === "yes" && (
                  <InputField
                    id="memberTwoCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={memberTwoCSAID}
                    valueUpdater={updateMemberTwoCSAID}
                    required={memberTwoCSAMember === "yes"}
                  />
                )}
                {!isMemberTwoCSAIDValid && (
                  <span className={errorMessage}>Invalid CSA ID</span>
                )}
                <InputField
                  id="memberTwoCourse"
                  type="text"
                  inputLabel="Course"
                  value={memberTwoCourse}
                  valueUpdater={updateMemberTwoCourse}
                  required={true}
                />
                {!isMemberTwoCourseValid && (
                  <span className={errorMessage}>Invalid Course</span>
                )}
                <InputField
                  id="memberTwoYearOfStudy"
                  type="text"
                  inputLabel="Year of Study"
                  value={memberTwoYearOfStudy}
                  valueUpdater={updateMemberTwoYearOfStudy}
                  required={true}
                />
                {!isMemberTwoYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* MEMBER TWO SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              {/* MEMBER THREE SECTION START */}

              <div
                className={memberSection}
                style={{
                  display: parseInt(teamSize, 10) > 2 ? "block" : "none",
                }}
              >
                <h3 className={sectionHeading}>Member Three</h3>

                <InputField
                  id="memberThreeName"
                  type="text"
                  inputLabel="Name"
                  value={memberThreeName}
                  valueUpdater={updateMemberThreeName}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreeNameValid && (
                  <span className={errorMessage}>Invalid Name</span>
                )}
                <InputField
                  id="memberThreeEmail"
                  type="email"
                  inputLabel="Email"
                  value={memberThreeEmail}
                  valueUpdater={updateMemberThreeEmail}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreeEmailValid && (
                  <span className={errorMessage}>Invalid Email</span>
                )}
                <InputField
                  id="memberThreePhone"
                  type="text"
                  inputLabel="Phone Number"
                  value={memberThreePhone}
                  valueUpdater={updateMemberThreePhone}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreePhoneValid && (
                  <span className={errorMessage}>Invalid Phone</span>
                )}
                <InputField
                  id="memberThreeSapID"
                  type="text"
                  inputLabel="SAP ID"
                  value={memberThreeSapID}
                  valueUpdater={updateMemberThreeSapID}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreeSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="memberThreeCSAMember"
                  value={memberThreeCSAMember}
                  valueUpdater={updateMemberThreeCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={parseInt(teamSize, 10) > 2}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isMemberThreeCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )}
                {memberThreeCSAMember === "yes" && (
                  <InputField
                    id="memberThreeCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={memberThreeCSAID}
                    valueUpdater={updateMemberThreeCSAID}
                    required={memberThreeCSAMember === "yes"}
                  />
                )}
                {!isMemberThreeCSAIDValid && (
                  <span className={errorMessage}>Invalid CSA ID</span>
                )}
                <InputField
                  id="memberThreeCourse"
                  type="text"
                  inputLabel="Course"
                  value={memberThreeCourse}
                  valueUpdater={updateMemberThreeCourse}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreeCourseValid && (
                  <span className={errorMessage}>Invalid Course</span>
                )}
                <InputField
                  id="memberThreeYearOfStudy"
                  type="text"
                  inputLabel="Year of Study"
                  value={memberThreeYearOfStudy}
                  valueUpdater={updateMemberThreeYearOfStudy}
                  required={parseInt(teamSize, 10) > 2}
                />
                {!isMemberThreeYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* MEMBER THREE SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              {/* MEMBER FOUR SECTION START */}

              <div
                className={memberSection}
                style={{
                  display: parseInt(teamSize, 10) > 3 ? "block" : "none",
                }}
              >
                <h3 className={sectionHeading}>Member Four</h3>

                <InputField
                  id="memberFourName"
                  type="text"
                  inputLabel="Name"
                  value={memberFourName}
                  valueUpdater={updateMemberFourName}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourNameValid && (
                  <span className={errorMessage}>Invalid Name</span>
                )}
                <InputField
                  id="memberFourEmail"
                  type="email"
                  inputLabel="Email"
                  value={memberFourEmail}
                  valueUpdater={updateMemberFourEmail}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourEmailValid && (
                  <span className={errorMessage}>Invalid Email</span>
                )}
                <InputField
                  id="memberFourPhone"
                  type="text"
                  inputLabel="Phone Number"
                  value={memberFourPhone}
                  valueUpdater={updateMemberFourPhone}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourPhoneValid && (
                  <span className={errorMessage}>Invalid Phone</span>
                )}
                <InputField
                  id="memberFourSapID"
                  type="text"
                  inputLabel="SAP ID"
                  value={memberFourSapID}
                  valueUpdater={updateMemberFourSapID}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="memberFourCSAMember"
                  value={memberFourCSAMember}
                  valueUpdater={updateMemberFourCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={parseInt(teamSize, 10) > 3}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isMemberFourCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )}
                {memberFourCSAMember === "yes" && (
                  <InputField
                    id="memberFourCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={memberFourCSAID}
                    valueUpdater={updateMemberFourCSAID}
                    required={memberFourCSAMember === "yes"}
                  />
                )}
                {!isMemberFourCSAIDValid && (
                  <span className={errorMessage}>Invalid CSA ID</span>
                )}
                <InputField
                  id="memberFourCourse"
                  type="text"
                  inputLabel="Course"
                  value={memberFourCourse}
                  valueUpdater={updateMemberFourCourse}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourCourseValid && (
                  <span className={errorMessage}>Invalid Course</span>
                )}
                <InputField
                  id="memberFourYearOfStudy"
                  type="text"
                  inputLabel="Year of Study"
                  value={memberFourYearOfStudy}
                  valueUpdater={updateMemberFourYearOfStudy}
                  required={parseInt(teamSize, 10) > 3}
                />
                {!isMemberFourYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* MEMBER FOUR SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              <button className={submitButton} onClick={submitFormOne}>
                NEXT
              </button>
            </div>
          ) : (
            <div className={formDiv}>
              <img
                loading="lazy"
                src="/icons/rightArrow.png"
                alt="backArrow"
                className={backArrow}
                onClick={() => setPaymentPage(false)}
              />
              <h3
                className={sectionHeading}
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "1.5rem",
                }}
              >
                Payment Section
              </h3>

              <div className={paymentQRDiv}>
                <img loading="lazy" src="/img/qr/qr.jpg" alt="frenzypitchQR" />
              </div>

              <InputField
                id="transactionID"
                type="text"
                inputLabel="Transaction ID"
                value={transactionID}
                valueUpdater={updateTransactionID}
                required={true}
              />

              <FileSelect
                id="transactionSS"
                inputLabel="Transaction Screenshot"
                valueUpdater={updateTransactionSS}
                required={true}
              />

              <button type="submit" className={submitButton}>
                Submit Form
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FrenzyPitchRegistrationPage;
