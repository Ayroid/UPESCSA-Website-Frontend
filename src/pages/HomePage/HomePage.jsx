import { useEffect, useState, lazy, Suspense } from "react";
import styles from "./HomePage.module.css";

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Popup from "../../components/Popup/Popup";

import Loading from "../../components/Loading/Loading";

// LAZY LOAD COMPONENTS
const HomeEvents = lazy(() => import("../../components/HomeEvents/HomeEvents"));
const Alliance = lazy(() => import("../../components/Alliance/Alliance"));
const HomeBlogs = lazy(() => import("../../components/HomeBlogs/HomeBlogs"));

// CSS STYLES
const { homepageContainer } = styles;

const HomePage = () => {
  // STATES
  // SET THIS TO TRUE TO ENABLE THE POPUP
  const eventActive = false;
  const [popupOpen, setPopupOpen] = useState(false);

  // USE EFFECTS
  useEffect(() => {
    const currentHash = window.location.hash;
    const targetElement = document.getElementById(currentHash.substring(1));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    if (!eventActive) {
      return;
    }
    setTimeout(() => {
      setPopupOpen(true);
    }, 500);
  }, [eventActive]);

  // FUNCTIONS
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div className={homepageContainer}>
      {popupOpen && (
        <Popup
          eventPosterURL="/img/events/live/Hackersummit.jpg"
          eventHeading="Hacker Summit"
          eventText="UPES Cloud Security Alliance, in collaboration with DEF CON Delhi Group, with great enthusiasm extends an invitation to join on a significant venture – Hackers Summit 1.0. We aim to extend valuable prospects to young minds, aiding them in learning within the paramount realm of the Cyber World - encompassing “the Holy Grail” of the Cyber World i.e.  Protect, detect, and respond.A one-day with the core objective of providing a comprehensive educational platform for students, Hackers Summit is an initiative to bring these minds under one umbrella through engaging activities and proffer networking opportunities. From foundational principles to intermediate-level concepts, we've got you covered!  This one day venture will span from foundational principles to intermediate-level concepts, ensuring a comprehensive learning experience. Hands-on demonstrations will allow participants to apply their knowledge in practical scenarios, enhancing their skills in the dynamic field of cybersecurity.So, are you ready to embark on an exhilarating journey into the realm of cybersecurity? Mark your calendars and make a date with knowledge and innovation at Hackers Summit!"
          eventFormURL="/evortal/hackersummit"
          closePopup={togglePopup}
        />
      )}
      <Home showTrigger={eventActive && !popupOpen} openPopup={togglePopup} />
      <About />
      <Suspense fallback={<Loading />}>
        <HomeEvents />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Alliance />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeBlogs />
      </Suspense>
    </div>
  );
};

export default HomePage;
