import { useEffect } from "react";
import styles from "./EvortalPage.module.css";

import EvortalEvents from "../../components/EvortalEvents/EvortalEvents";
import PageHeading from "../../components/PageHeading/PageHeading";
import EvortalSeparator from "../../components/EvortalSeparator/EvortalSeparator";

// CSS STYLES
const { evortalContainer, evortalDiv } = styles;

const EvortalPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // EVENTS DATA
  const activeEvents = [
    // {
    //   eventImageURL: "/img/events/live/Hackersummit.jpg",
    //   eventHeading: "Hacker Summit",
    //   eventText:
    //     "UPES Cloud Security Alliance, in collaboration with DEF CON Delhi Group, with great enthusiasm extends an invitation to join on a significant venture – Hackers Summit 1.0. We aim to extend valuable prospects to young minds, aiding them in learning within the paramount realm of the Cyber World - encompassing “the Holy Grail” of the Cyber World i.e.  Protect, detect, and respond.A one-day with the core objective of providing a comprehensive educational platform for students, Hackers Summit is an initiative to bring these minds under one umbrella through engaging activities and proffer networking opportunities. From foundational principles to intermediate-level concepts, we've got you covered!  This one day venture will span from foundational principles to intermediate-level concepts, ensuring a comprehensive learning experience. Hands-on demonstrations will allow participants to apply their knowledge in practical scenarios, enhancing their skills in the dynamic field of cybersecurity.So, are you ready to embark on an exhilarating journey into the realm of cybersecurity? Mark your calendars and make a date with knowledge and innovation at Hackers Summit!",
    //   eventMode: "Online",
    //   eventTeamSize: "1",
    //   eventRegistrationFee: "Free",
    //   eventDate: "25 Feb",
    //   eventFormURL: "/evortal/hackersummit",
    //   activeEvent: true,
    // },
    {
      eventImageURL: "/img/events/live/FRENZY_PITCH-01.jpg",
      eventHeading: "Frenzy Pitch",
      eventText:
        "A competition that challenges teams to rethink and redesign ordinary household items into innovative products, with a wildcard challenge to push your creative boundaries.",
      eventMode: "Offline",
      eventTeamSize: "2-4",
      eventRegistrationFee: "Paid",
      eventRegistrationType: "Mixed",
      eventDate: "19 Mar",
      eventFormURL: "/evortal/frenzypitch",
      activeEvent: true,
    },
    {
      eventImageURL: "/img/events/live/Virtual Escape FUNTOPIA.jpg",
      eventHeading: "Virtual Escape Room",
      eventText:
        "Test your problem-solving skills, teamwork, and quick thinking in a thrilling virtual escape room experience.",
      eventMode: "Offline",
      eventTeamSize: "1-2",
      eventRegistrationFee: "Paid",
      eventRegistrationType: "Mixed",
      eventDate: "20 Mar",
      eventFormURL: "/evortal/virtualescaperoom",
      activeEvent: true,
    },
    {
      eventImageURL: "/img/events/live/Ultimate_Showdown-01.jpg",
      eventHeading: "The Ultimate Showdown",
      eventText:
        'Engage in a physical and mental test through the "Floor is Lava" and "Stack It Challenge", designed to test your agility, precision, and strategy.',
      eventMode: "Offline",
      eventTeamSize: "1",
      eventRegistrationFee: "Paid",
      eventRegistrationType: "Mixed",
      eventDate: "20 Mar",
      eventFormURL: "/evortal/ultimateshowdown",
      activeEvent: true,
    },
  ];

  const upcomingEvents = [
    {
      eventImageURL: "/img/placeholder.png",
      eventHeading: "Coming Soon...",
      eventText: "",
      eventMode: "?",
      eventTeamSize: "?",
      eventDate: "?",
      eventRegistrationFee: "?",
      activeEvent: false,
    },
  ];

  return (
    <div className={evortalContainer}>
      <PageHeading imgURL="/img/pageheaders/evortal.jpg" text="EVORTAL" />
      <div className={evortalDiv}>
        <EvortalSeparator text="Active Events" />
        {activeEvents.map((event) => (
          <EvortalEvents
            key={event.eventHeading}
            eventImageURL={event.eventImageURL}
            eventHeading={event.eventHeading}
            eventText={event.eventText}
            eventMode={event.eventMode}
            eventTeamSize={event.eventTeamSize}
            eventRegistrationFee={event.eventRegistrationFee}
            eventRegistrationType={event.eventRegistrationType}
            eventDate={event.eventDate}
            eventFormURL={event.eventFormURL}
            activeEvent={event.activeEvent}
          />
        ))}
        <EvortalSeparator text="Upcoming Events" />
        {upcomingEvents.map((event) => (
          <EvortalEvents
            key={event.eventHeading}
            eventImageURL={event.eventImageURL}
            eventHeading={event.eventHeading}
            eventText={event.eventText}
            eventMode={event.eventMode}
            eventTeamSize={event.eventTeamSize}
            eventRegistrationFee={event.eventRegistrationFee}
            eventRegistrationType={event.eventRegistrationType}
            eventDate={event.eventDate}
            activeEvent={event.activeEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default EvortalPage;
