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

const VirtualEscapeRoomRegistrationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const eventDetails = {
    eventRegistrationURL: `${
      import.meta.env.VITE_SERVER_URL
    }/api/event/register/virtualescaperoom`,
    eventImageURL: "/img/events/live/Virtual Escape FUNTOPIA.jpg",
    eventHeading: "Virtual Escape Room",
    eventText:
      "Test your problem-solving skills, teamwork, and quick thinking in a thrilling virtual escape room experience.",
    eventMode: "Offline",
    eventTeamSize: "1-2",
    eventRegistrationFee: "All-CSA: 30Rs | Non-CSA: 50Rs",
    eventDate: "20 Mar",
    whatsGroup: "FwtiqPHV9vp98v9OiqkNad",
  };

  // FORM STATES

  const [paymentPage, setPaymentPage] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [virtualEscapeTransactionSS, setVirtualEscapeTransactionSS] =
    useState(null);

  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("1");

  const [memberOneName, setMemberOneName] = useState("");
  const [memberOneEmail, setMemberOneEmail] = useState("");
  const [memberOnePhone, setMemberOnePhone] = useState("");
  const [memberOneCourse, setMemberOneCourse] = useState("");
  const [memberOneYearOfStudy, setMemberOneYearOfStudy] = useState("");
  const [memberOneSapID, setMemberOneSapID] = useState("");
  const [memberOneCSAMember, setMemberOneCSAMember] = useState("");
  const [memberOneCSAID, setMemberOneCSAID] = useState("");

  const [memberTwoName, setMemberTwoName] = useState("");
  const [memberTwoEmail, setMemberTwoEmail] = useState("");
  const [memberTwoPhone, setMemberTwoPhone] = useState("");
  const [memberTwoCourse, setMemberTwoCourse] = useState("");
  const [memberTwoYearOfStudy, setMemberTwoYearOfStudy] = useState("");
  const [memberTwoSapID, setMemberTwoSapID] = useState("");
  const [memberTwoCSAMember, setMemberTwoCSAMember] = useState("");
  const [memberTwoCSAID, setMemberTwoCSAID] = useState("");

  // UPDATE FUNCTIONS

  const updateTransactionID = (e) => {
    setTransactionID(e.target.value);
  };
  const updateTransactionSS = (e) => {
    setVirtualEscapeTransactionSS(e.target.files[0]);
  };

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const updateTeamSize = (e) => {
    setTeamSize(e.target.value);
  };

  const updateTeamLeadName = (e) => {
    setMemberOneName(e.target.value);
  };
  const updateTeamLeadEmail = (e) => {
    setMemberOneEmail(e.target.value);
  };
  const updateTeamLeadPhone = (e) => {
    setMemberOnePhone(e.target.value);
  };
  const updateTeamLeadCourse = (e) => {
    setMemberOneCourse(e.target.value);
  };
  const updateTeamLeadYearOfStudy = (e) => {
    setMemberOneYearOfStudy(e.target.value);
  };
  const updateTeamLeadSapID = (e) => {
    setMemberOneSapID(e.target.value);
  };
  const updateTeamLeadCSAMember = (e) => {
    setMemberOneCSAMember(e.target.value);
  };
  const updateTeamLeadCSAID = (e) => {
    setMemberOneCSAID(e.target.value);
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

  // VALIDATION STATES

  const [isTeamNameValid, setIsTeamNameValid] = useState(true);

  const [isMemberOneNameValid, setIsMemberOneNameValid] = useState(true);
  const [isMemberOneEmailValid, setIsMemberOneEmailValid] = useState(true);
  const [isMemberOnePhoneValid, setIsMemberOnePhoneValid] = useState(true);
  const [isMemberOneCourseValid, setIsMemberOneCourseValid] = useState(true);
  const [isMemberOneYearOfStudyValid, setIsMemberOneYearOfStudyValid] =
    useState(true);
  const [isMemberOneSapIDValid, setIsMemberOneSapIDValid] = useState(true);
  const [isMemberOneCSAMemberValid, setIsMemberOneCSAMemberValid] =
    useState(true);
  const [isMemberOneCSAIDValid, setIsMemberOneCSAIDValid] = useState(true);

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

  // VALIDATION FUNCTIONS

  const validateTeamName = () => {
    return VALIDATENAME(teamName, setIsTeamNameValid);
  };

  const validateTeamLead = () => {
    const teamLeadNameValid = VALIDATENAME(
      memberOneName,
      setIsMemberOneNameValid
    );
    const teamLeadEmailValid = VALIDATEEMAIL(
      memberOneEmail,
      setIsMemberOneEmailValid
    );
    const teamLeadPhoneValid = VALIDATEPHONE(
      memberOnePhone,
      setIsMemberOnePhoneValid
    );
    const teamLeadCourseValid = VALIDATECOURSE(
      memberOneCourse,
      setIsMemberOneCourseValid
    );
    const teamLeadYearOfStudyValid = VALIDATEYEAROFSTUDY(
      memberOneYearOfStudy,
      setIsMemberOneYearOfStudyValid
    );
    const teamLeadSapIDValid = VALIDATESAPID(
      memberOneSapID,
      setIsMemberOneSapIDValid
    );
    const teamLeadCSAMemberValid = VALIDATECSAMEMBER(
      memberOneCSAMember,
      setIsMemberOneCSAMemberValid
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
      return memberOneCSAMember === "yes"
        ? VALIDATECSAID(memberOneCSAID, setIsMemberOneCSAIDValid)
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

  const submitFormOne = (e) => {
    e.preventDefault();
    if (validateTeamName() && validateTeamLead()) {
      if (teamSize === "2") {
        setPaymentPage(validateMemberTwo());
      } else {
        setPaymentPage(true);
      }
    }
  };

  const submitFormFinal = (e) => {
    e.preventDefault();

    // VALIDATION

    if (validateTeamName() && validateTeamLead()) {
      if (teamSize === "2" && !validateMemberTwo()) {
        return;
      }

      setLoading(true);

      const data = {
        teamName,
        teamSize,
        memberOneName,
        memberOneEmail,
        memberOnePhone,
        memberOneCourse,
        memberOneYearOfStudy,
        memberOneSapID,
        memberOneCSAMember,
        memberOneCSAID,
        memberTwoName,
        memberTwoEmail,
        memberTwoPhone,
        memberTwoCourse,
        memberTwoYearOfStudy,
        memberTwoSapID,
        memberTwoCSAMember,
        memberTwoCSAID,
        transactionID,
      };

      const finalData = new FormData();

      for (const key in data) {
        finalData.append(key, data[key]);
      }

      finalData.append(
        "virtualEscapeTransactionSS",
        virtualEscapeTransactionSS
      );

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
                options={["2"]}
                defaultOption="1"
              />

              {/* TEAM LEAD SECTION START */}

              <div className={memberSection}>
                <h3 className={sectionHeading}>Member One</h3>

                <InputField
                  id="memberOneName"
                  type="text"
                  inputLabel="Name"
                  value={memberOneName}
                  valueUpdater={updateTeamLeadName}
                  required={true}
                />
                {!isMemberOneNameValid && (
                  <span className={errorMessage}>Invalid Name</span>
                )}
                <InputField
                  id="memberOneEmail"
                  type="email"
                  inputLabel="Email"
                  value={memberOneEmail}
                  valueUpdater={updateTeamLeadEmail}
                  required={true}
                />
                {!isMemberOneEmailValid && (
                  <span className={errorMessage}>Invalid Email</span>
                )}
                <InputField
                  id="memberOnePhone"
                  type="text"
                  inputLabel="Phone Number"
                  value={memberOnePhone}
                  valueUpdater={updateTeamLeadPhone}
                  required={true}
                />
                {!isMemberOnePhoneValid && (
                  <span className={errorMessage}>Invalid Phone</span>
                )}
                <InputField
                  id="memberOneSapID"
                  type="text"
                  inputLabel="SAP ID"
                  value={memberOneSapID}
                  valueUpdater={updateTeamLeadSapID}
                  required={true}
                />
                {!isMemberOneSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="memberOneCSAMember"
                  value={memberOneCSAMember}
                  valueUpdater={updateTeamLeadCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={true}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isMemberOneCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )}
                {memberOneCSAMember === "yes" && (
                  <InputField
                    id="memberOneCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={memberOneCSAID}
                    valueUpdater={updateTeamLeadCSAID}
                    required={memberOneCSAMember === "yes"}
                  />
                )}
                {!isMemberOneCSAIDValid && (
                  <span className={errorMessage}>Invalid CSA ID</span>
                )}
                <InputField
                  id="teamLeadCourse"
                  type="text"
                  inputLabel="Course"
                  value={memberOneCourse}
                  valueUpdater={updateTeamLeadCourse}
                  required={true}
                />
                {!isMemberOneCourseValid && (
                  <span className={errorMessage}>Invalid Course</span>
                )}
                <InputField
                  id="teamLeadYearOfStudy"
                  type="text"
                  inputLabel="Year of Study"
                  value={memberOneYearOfStudy}
                  valueUpdater={updateTeamLeadYearOfStudy}
                  required={true}
                />
                {!isMemberOneYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* TEAM LEAD SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              {/* MEMBER TWO SECTION START */}

              <div
                className={memberSection}
                style={{
                  display: parseInt(teamSize, 10) === 2 ? "block" : "none",
                }}
              >
                <h3 className={sectionHeading}>Member Two</h3>

                <InputField
                  id="memberTwoName"
                  type="text"
                  inputLabel="Name"
                  value={memberTwoName}
                  valueUpdater={updateMemberTwoName}
                  required={parseInt(teamSize, 10) === 2}
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
                  required={parseInt(teamSize, 10) === 2}
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
                  required={parseInt(teamSize, 10) === 2}
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
                  required={parseInt(teamSize, 10) === 2}
                />
                {!isMemberTwoSapIDValid && (
                  <span className={errorMessage}>Invalid SAP ID</span>
                )}
                <DropDownSelectField
                  id="memberTwoCSAMember"
                  value={memberTwoCSAMember}
                  valueUpdater={updateMemberTwoCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={parseInt(teamSize, 10) === 2}
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
                  required={parseInt(teamSize, 10) === 2}
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
                  required={parseInt(teamSize, 10) === 2}
                />
                {!isMemberTwoYearOfStudyValid && (
                  <span className={errorMessage}>Invalid Year of Study</span>
                )}
              </div>

              {/* MEMBER TWO SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

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
                <img
                  loading="lazy"
                  src="/img/qr/qr.jpg"
                  alt="virtualEscapeQR"
                />
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

export default VirtualEscapeRoomRegistrationPage;
