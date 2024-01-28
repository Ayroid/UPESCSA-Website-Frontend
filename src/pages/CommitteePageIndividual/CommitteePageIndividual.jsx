import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CommitteePageIndividual.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import ImageText from "../../components/ImageText/ImageText";

// CSS STYLES
const {
  committeePageIndividualContainer,
  committeePageIndividualdDiv,
  committeeDescription,
  committeeMemberTitle,
  committeeHeadsContainer,
  committeeMembersContainer,
  committeeMemberName,
} = styles;

const CommitteePageIndividual = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const teamId = useParams();
  const navigate = useNavigate();

  const [teamValue, setTeamValue] = useState(null);

  useEffect(() => {
    const committeeNames = [
      "design",
      "editorial",
      "events",
      "logistics",
      "photography",
      "publicrelations",
      "registrations",
      "socialmedia",
      "technical",
    ];
    const currentTeamValue = teamId ? Object.values(teamId)[0] : null;
    if (!committeeNames.includes(currentTeamValue)) {
      navigate("/404");
    }
    setTeamValue(currentTeamValue);
  }, [teamId, navigate, teamValue]);

  // COMMITTEE DATA
  const committeeData = {
    committeeName: "Public Relations",
    committeeDescription:
      "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
    headsInfo: [
      {
        headName: "Head 1",
        headImageURL: "/img/blogs/placeholder.png",
        headPosition: "Head Position",
        headLinkedInURL: "https://www.linkedin.com/",
      },
      {
        headName: "Head 2",
        headImageURL: "/img/blogs/placeholder.png",
        headPosition: "Head Position",
        headLinkedInURL: "https://www.linkedin.com/",
      },
      {
        headName: "Head 3",
        headImageURL: "/img/blogs/placeholder.png",
        headPosition: "Head Position",
        headLinkedInURL: "https://www.linkedin.com/",
      },
    ],
    committeeMemberNames: [
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
      "Member Name",
    ],
  };

  return (
    <div className={committeePageIndividualContainer}>
      <PageHeading
        imgURL="/img/pageheaders/team.png"
        text={committeeData.committeeName}
      />
      <div className={committeePageIndividualdDiv}>
        <p className={committeeDescription}>
          {committeeData.committeeDescription}
        </p>
        <h4 className={committeeMemberTitle}>Heads & Associate Heads</h4>
        <div className={committeeHeadsContainer}>
          {committeeData.headsInfo.map((head) => (
            <ImageText
              key={head.headName}
              title={head.headName}
              titleAlign="center"
              subTitle={head.headPosition}
              subTitleAlign="center"
              link={head.headLinkedInURL}
              mainImg={head.headImageURL}
              externalLink={false}
              textColor={"var(--textDark)"}
            />
          ))}
        </div>
        <h4 className={committeeMemberTitle}>Members</h4>
        <div className={committeeMembersContainer}>
          {committeeData.committeeMemberNames.map((memberName, index) => (
            <div key={index} className={committeeMemberName}>
              {memberName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePageIndividual;
