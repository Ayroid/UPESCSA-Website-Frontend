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
          eventPosterURL="/img/events/live/hackathon3.0.jpg"
          eventHeading="Hackathon 3.0"
          eventText={
            <>
              UPES CSA&rsquo;s third iteration of the flagship event, Hackathon
              3.0, is set to be a pinnacle event for innovation and
              problem-solving, bringing together the brightest minds to tackle
              real-world challenges. As we gear up for this exciting event,
              it&rsquo;s crucial to ensure your team is registered in time to
              participate.
              <br />
              <br />
              The deadline to select your problem statement and fill the
              submission form for Hackathon 3.0 is 6:00 PM on April 18, 2024.
              Beyond this time, we will not be accepting any further
              submissions, so be sure to act promptly to secure your spot in the
              competition.
              <br />
              <br />
              Explore the diverse range of problem statements available on our
              website. Choose the challenge that resonates most with your
              team&rsquo;s interests and expertise. Remember, selecting the
              right problem statement is key to unlocking your potential for
              success in the competition.
              <br />
              <br />
              Once you&rsquo;ve finalized your problem statement, navigate to
              the problem statement submission page on our website. Fill out the
              form with accurate information, including your team name (as
              filled in the registration form while registering for the
              hackathon) and selected problem statement. Double-check all
              details before submission to ensure accuracy.
              <br />
              <br />
              Important Notes:
              <br />
              <br />
              - Only teams that have completed the problem selection and
              submission form process before the deadline will be eligible to
              participate in Hackathon 3.0.
              <br />
              <br />- Ensure that your team name is spelled correctly and
              reflects your intended identity as filled in the initial
              registration form.
              <br />
              <br />- Late submissions will not be accepted, so don&rsquo;t miss
              the deadline!
              <br />
              <br />
              Hackathon 3.0 promises to be an exhilarating journey of innovation
              and collaboration. Lock in your problem statement before the
              deadline, and prepare to embark on a coding odyssey that could
              change the world, one&rsquo;step&rsquo;at&rsquo;a&rsquo;time.
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
