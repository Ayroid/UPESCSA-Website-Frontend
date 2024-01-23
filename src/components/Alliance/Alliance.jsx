import styles from "./Alliance.module.css";

import SectionHeading from "../SectionHeading/SectionHeading";

// CSS STYLES
const {
  allianceContainer,
  sectionHeading,
  allianceDiv,
  alliance,
  allianceImg,
  allianceText,
} = styles;

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
        <SectionHeading heading="Alliance" underlineColor="#FFE600" />
      </div>
      <div className={allianceDiv}>
        {allianceData.map((data) => (
          <a
            key={data.title}
            className={alliance}
            href={data.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={data.img} className={allianceImg} alt={data.title} />
            <div className={allianceText}>{data.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Alliance;
