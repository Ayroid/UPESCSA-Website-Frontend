import styles from "./EventsPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventYearSwitch from "../../components/EventYearSwitch/EventYearSwitch";

// CSS STYLES
const { eventsPageContainer, eventsPageDiv } = styles;

const EventsPage = () => {
  return (
    <div className={eventsPageContainer}>
      <PageHeading imgURL="/img/pageheaders/events.png" text="EVENTS" />
      <div className={eventsPageDiv}>
        <EventYearSwitch />
      </div>
    </div>
  );
};

export default EventsPage;
