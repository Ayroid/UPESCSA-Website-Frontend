import styles from "./SponsorsSection.module.css";

const {
  mainDiv,
  sponsorsHeadingDiv,
  subHeading,
  sponsorsHeading,
  sponsorsDiv,
  sponsorsInfo,
  sponsorInfo,
  sponsorImage,
  bluelearn,
} = styles;

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "HoverRobotix",
      id: "hoverrobotix",
      link: "https://hoverrobotix.com/",
      image: "/sponsors/sponsors/hoverrobotix.png",
    },
    {
      name: "Indian Hempstore",
      id: "indianhempstore",
      link: "https://indianhempstore.com/",
      image: "/sponsors/sponsors/indianhempstore.png",
    },
    {
      name: "Learning with Travelling",
      id: "learningwithtravelling",
      link: "https://learningwhiletravelling.com/",
      image: "/sponsors/sponsors/lwt.png",
    },
    {
      name: "MentorX",
      id: "mentorx",
      link: "https://thementorx.com/",
      image: "/sponsors/sponsors/mentorx.png",
    },
    {
      name: "GiveMyCertificate",
      id: "givemycertificate",
      link: "https://givemycertificate.com/",
      image: "/sponsors/sponsors/givemycertificate.png",
    },
    {
      name: "InterviewBuddy",
      id: "interviewbuddy",
      link: "https://www.interviewbuddy.in/",
      image: "/sponsors/sponsors/interviewbuddy.png",
    },
  ];

  return (
    <div className={mainDiv} id="sponsors">
      <div className={sponsorsHeadingDiv}>
        <h1 className={subHeading}>SUPPORTED BY</h1>
        <h1 className="heading" id={sponsorsHeading}>
          OUR SPONSORS
        </h1>
      </div>
      <div className={sponsorsDiv}>
        {sponsors.map((sponsor) => (
          <div className={sponsorsInfo} key={sponsor.name}>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <div className={sponsorInfo}>
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={sponsorImage}
                  id={sponsor.id}
                />
              </div>
            </a>
          </div>
        ))}
        <div className={sponsorsInfo}>
          <a
            href="https://www.bluelearn.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={sponsorInfo}>
              <img
                src="/sponsors/sponsors/bluelearn.png"
                alt="Blue Learn"
                className={sponsorImage}
                id={bluelearn}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
