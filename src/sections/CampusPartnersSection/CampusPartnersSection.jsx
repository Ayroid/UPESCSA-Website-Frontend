import styles from "./CampusPartnersSection.module.css";

const {
  mainDiv,
  sponsorsHeadingDiv,
  subHeading,
  sponsorsHeading,
  sponsorsDiv,
  sponsorsInfo,
  sponsorImage,
} = styles;

const CampusPartnersSection = () => {
  const campusPartners = [
    {
      name: "CU Academic Competitions",
      logo: "/sponsors/campusPartners/cu_cac.png",
      link: "https://givemycertificate.com/",
    },
    {
      name: "DevClub",
      logo: "/sponsors/campusPartners/devclub.jpeg",
      link: "https://www.interviewbuddy.in/",
    },
    {
      name: "DIT ACM",
      logo: "/sponsors/campusPartners/dit_acm.png",
      link: "https://www.interviewbuddy.in/",
    },
    {
      name: "GDSC NITJ",
      logo: "/sponsors/campusPartners/gdsc_nitj.png",
      link: "https://www.interviewbuddy.in/",
    },
    {
      name: "MANIT ISTE",
      logo: "/sponsors/campusPartners/manit_iste.jpeg",
      link: "https://www.interviewbuddy.in/",
    },
    {
      name: "SDC SNIST",
      logo: "/sponsors/campusPartners/sdc_snist.jpeg",
      link: "https://www.interviewbuddy.in/",
    },
  ];

  return (
    <div className={mainDiv} id="campus">
      <div className={sponsorsHeadingDiv}>
        <h1 className={subHeading}>Empowering tomorrow with our</h1>
        <h1 className="heading" id={sponsorsHeading}>
          Campus Partnerships
        </h1>
      </div>
      <div className={sponsorsDiv}>
        {campusPartners.map((campusPartner, index) => (
          <div className={sponsorsInfo} key={index}>
            {/* <a target="_blank" href={campusPartner.link}> */}
            <img
              className={sponsorImage}
              src={campusPartner.logo}
              alt={campusPartner.name}
            />
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPartnersSection;
