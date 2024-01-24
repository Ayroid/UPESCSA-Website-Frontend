import styles from "./Alliance.module.css";

import SectionHeading from "../SectionHeading/SectionHeading";
import ImageText from "../ImageText/ImageText";

// CSS STYLES
const { allianceContainer, sectionHeading, allianceDiv } = styles;

const Alliance = () => {
  // ALLIANCE DATA
  const allianceData = [
    {
      img: "/img/alliance/codewar.avif",
      title: "Code Warriors",
      link: "https://codewarriors.in",
    },
    {
      img: "/img/alliance/gmc.avif",
      title: "Give My Certificate",
      link: "https://givemycertificate.com",
    },
    {
      img: "/img/alliance/awsugmum.png",
      title: "AWS UG MUM",
      link: "https://www.linkedin.com/company/awsugmum/",
    },
    {
      img: "/img/alliance/newtonschool.avif",
      title: "Newton School",
      link: "https://www.newtonschool.co/",
    },
  ];

  return (
    <div className={allianceContainer} id="alliance">
      <div className={sectionHeading}>
        <SectionHeading
          heading="Alliance"
          underlineColor="var(--yellowUnderLine)"
        />
      </div>
      <div className={allianceDiv}>
        {allianceData.map((data) => (
          <ImageText
            key={data.title}
            title={data.title}
            titleAlign="center"
            link={data.link}
            allianceImg={data.img}
            externalLink={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Alliance;
