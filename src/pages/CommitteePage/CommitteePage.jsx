import ImageText from "../../components/ImageText/ImageText";
import styles from "./CommitteePage.module.css";

// CSS STYLES
const { committeePageContainer } = styles;

const CommitteePage = () => {
  // COMMITTEE DATA
  const committeeData = [
    {
      committeeName: "Design",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/design",
    },
    {
      committeeName: "Editorial",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/editorial",
    },
    {
      committeeName: "Events",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/events",
    },
    {
      committeeName: "Logistics",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/logistics",
    },
    {
      committeeName: "Photography",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/photography",
    },
    {
      committeeName: "Public Relations",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/publicrelations",
    },
    {
      committeeName: "Registrations",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/registrations",
    },
    {
      committeeName: "Social Media",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/socialmedia",
    },
    {
      committeeName: "Technical",
      committeeImageURL: "/img/blogs/placeholder.png",
      committeePageURL: "/team/technical",
    },
  ];

  return (
    <div className={committeePageContainer}>
      {committeeData.map((committee) => (
        <ImageText
          key={committee.committeeName}
          title={committee.committeeName}
          titleAlign="center"
          link={committee.committeePageURL}
          mainImg={committee.committeeImageURL}
          textColor={"var(--textDark)"}
        />
      ))}
    </div>
  );
};

export default CommitteePage;
