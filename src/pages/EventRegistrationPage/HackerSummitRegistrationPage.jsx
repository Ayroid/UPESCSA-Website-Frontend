import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  VALIDATEUPESSTUDENT,
  VALIDATEYEAROFSTUDY,
} from "../../utils/registrationValidations";
import FormLoading from "../../components/FormLoading/FormLoading";

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
  eventDetailsDiv,
  eventDetail,
  formDiv,
  formContainer,
  errorMessage,
  loadingDiv,
} = styles;

const HackerSummitRegistrationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [upesStudent, setUpesStudent] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [sapID, setSapID] = useState("");

  const updateName = (e) => setStudentName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateCourse = (e) => setCourse(e.target.value);
  const updateYearOfStudy = (e) => setYearOfStudy(e.target.value);
  const updateUpesStudent = (e) => {
    setUpesStudent(e.target.value);
  };
  const updateCollegeName = (e) => setCollegeName(e.target.value);
  const updateSapID = (e) => setSapID(e.target.value);

  // VALIDATION STATES
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);
  const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
  const [isUpesStudentValid, setIsUpesStudentValid] = useState(true);
  const [isCollegeNameValid, setIsCollegeNameValid] = useState(true);
  const [isSapIDValid, setIsSapIDValid] = useState(true);

  const eventDetails = {
    eventRegistrationURL: `${
      import.meta.env.VITE_SERVER_URL
    }/api/event/register/hackersummit`,
    eventImageURL: "/img/events/live/Hackersummit.jpg",
    eventHeading: "Hacker Summit",
    eventText:
      "UPES Cloud Security Alliance, in collaboration with DEF CON Delhi Group, with great enthusiasm extends an invitation to join on a significant venture – Hackers Summit 1.0. We aim to extend valuable prospects to young minds, aiding them in learning within the paramount realm of the Cyber World - encompassing “the Holy Grail” of the Cyber World i.e.  Protect, detect, and respond.A one-day with the core objective of providing a comprehensive educational platform for students, Hackers Summit is an initiative to bring these minds under one umbrella through engaging activities and proffer networking opportunities. From foundational principles to intermediate-level concepts, we've got you covered!  This one day venture will span from foundational principles to intermediate-level concepts, ensuring a comprehensive learning experience. Hands-on demonstrations will allow participants to apply their knowledge in practical scenarios, enhancing their skills in the dynamic field of cybersecurity.So, are you ready to embark on an exhilarating journey into the realm of cybersecurity? Mark your calendars and make a date with knowledge and innovation at Hackers Summit!",
    eventMode: "Online",
    eventTeamSize: "1",
    eventRegistrationFee: "Free",
    eventDate: "25 Feb",
  };

  const submitForm = (e) => {
    e.preventDefault();

    // VALIDATION

    const nameValid = VALIDATENAME(studentName, setIsNameValid);
    const emailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const phoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const courseValid = VALIDATECOURSE(course, setIsCourseValid);
    const yearOfStudyValid = VALIDATEYEAROFSTUDY(
      yearOfStudy,
      setIsYearOfStudyValid
    );
    const upesStudentValid = VALIDATEUPESSTUDENT(
      upesStudent,
      setIsUpesStudentValid
    );

    if (
      nameValid &&
      emailValid &&
      phoneValid &&
      courseValid &&
      yearOfStudyValid &&
      upesStudentValid
    ) {
      if (
        (upesStudent === "yes" && !VALIDATESAPID(sapID, setIsSapIDValid)) ||
        (upesStudent === "no" &&
          !VALIDATENAME(collegeName, setIsCollegeNameValid))
      ) {
        return;
      } else {
        setLoading(true);
        const data = {
          studentName,
          email,
          phone,
          course,
          yearOfStudy,
          upesStudent,
          collegeName,
          sapID,
        };

        axios
          .post(eventDetails.eventRegistrationURL, data)
          .then((response) => {
            console.log(response);
            navigate("/registrationSuccess");
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });

        console.log("Form submitted!");
      }
    }
  };

  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}
      <Link to={"/evortal"}>
        <img
          loading="lazy"
          src="/icons/rightArrow.png"
          alt="backArrow"
          className={backArrow}
        />
      </Link>
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
            <img loading="lazy" src="/icons/registrationFee.png" alt="" />
            <p>{eventDetails.eventRegistrationFee}</p>
          </div>
          <div className={eventDetail}>
            <img loading="lazy" src="/icons/date.png" alt="" />
            <p>{eventDetails.eventDate}</p>
          </div>
        </div>
        <div className={eventDescripton}>
          <h4 className={eventHeading}>Event Details</h4>
          <p className={eventText}>{eventDetails.eventText}</p>
        </div>
      </div>
      <div>
        <div className={formContainer}>
          <h2 className={heading}>{eventDetails.eventHeading}</h2>
          <div className={styles.divider}></div>
          <form className={formDiv} onSubmit={submitForm}>
            <InputField
              id="name"
              type="text"
              inputLabel="Name"
              value={studentName}
              valueUpdater={updateName}
              required={true}
            />
            {!isNameValid && <span className={errorMessage}>Invalid Name</span>}
            <InputField
              id="email"
              type="email"
              placeholder="Email"
              inputLabel="Email"
              value={email}
              valueUpdater={updateEmail}
              required={true}
            />
            {!isEmailValid && (
              <span className={errorMessage}>Invalid Email</span>
            )}
            <InputField
              id="phone"
              type="text"
              inputLabel="Phone"
              value={phone}
              valueUpdater={updatePhone}
              required={true}
            />
            {!isPhoneValid && (
              <span className={errorMessage}>Invalid Phone</span>
            )}
            <DropDownSelectField
              id="upesStudent"
              value={upesStudent}
              valueUpdater={updateUpesStudent}
              inputLabel="Are you a UPES Student?"
              required={true}
              options={["Yes", "No"]}
            />
            {!isUpesStudentValid && (
              <span className={errorMessage}>Invalid Option</span>
            )}
            {upesStudent === "no" && (
              <InputField
                id="collegeName"
                type="text"
                inputLabel="College Name"
                value={collegeName}
                valueUpdater={updateCollegeName}
                required={upesStudent === "no"}
              />
            )}
            {!isCollegeNameValid && (
              <span className={errorMessage}>Invalid College Name</span>
            )}
            {upesStudent === "yes" && (
              <InputField
                id="sapID"
                type="text"
                inputLabel="Sap ID"
                value={sapID}
                valueUpdater={updateSapID}
                required={upesStudent === "yes"}
              />
            )}
            {!isSapIDValid && (
              <span className={errorMessage}>Invalid Sap ID</span>
            )}
            <InputField
              id="course"
              type="text"
              inputLabel="Course"
              value={course}
              valueUpdater={updateCourse}
              required={true}
            />
            {!isCourseValid && (
              <span className={errorMessage}>Invalid Course</span>
            )}
            <InputField
              id="yearOfStudy"
              type="text"
              inputLabel="Year of Study"
              value={yearOfStudy}
              valueUpdater={updateYearOfStudy}
              required={true}
            />
            {!isYearOfStudyValid && (
              <span className={errorMessage}>Invalid Year of Study</span>
            )}
            <button className={submitButton}>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HackerSummitRegistrationPage;
