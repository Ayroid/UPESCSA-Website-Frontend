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
  const eventActive = true;
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
          eventPosterURL="/img/events/live/hackathon3.0.jpg"
          eventHeading="Hackathon 3.0"
          eventText={
            <>
              🚀 Hackathon 3.0 Registration Now Open! 🚀 Get ready for the
              ultimate tech showdown and join us for the most exhilarating tech
              event of the year! Hackathon 3.0 is back and better than ever.
              Whether you&apos;re a coding whiz or an aspiring innovator, this
              is your chance to turn your ideas into reality, solve real-world
              problems, and leave a lasting impact in the digital universe.
              <br />
              <br />
              📅 Event Date: 19 - 21 April 2024
              <br />
              <br />
              🌐 Mode: Online
              <br />
              <br />
              🎨 Theme: Redefining Urban Horizons with Innovation & Secure
              Digital Environment and Privacy
              <br />
              <br />
              Register Now to join us for an exhilarating journey of creativity,
              collaboration, and innovation. Don&apos;t miss out on this
              opportunity to code your way to the stars!
            </>
          }
          eventFormURL="/hackathon3.0"
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
