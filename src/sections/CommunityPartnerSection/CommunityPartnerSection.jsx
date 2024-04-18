import styles from "./CommunityPartnerSection.module.css";

const {
  mainDiv,
  sponsorsHeadingDiv,
  sponsorsSubHeading,
  sponsorsHeading,
  sponsorsDiv,
  sponsorsInfo,
  sponsorInfo,
  sponsorImage,
  azdev,
  reskill,
} = styles;

const CommunityPartnerSection = () => {
  return (
    <div className={mainDiv} id="community">
      <div className={sponsorsHeadingDiv}>
        <h4 className={sponsorsSubHeading}>Driven by the support of our</h4>
        <h1 className={sponsorsHeading}>
          Community <br /> Partners
        </h1>
      </div>
      <div className={sponsorsDiv}>
        <div className={sponsorsInfo}>
          <div className={sponsorInfo}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://azdev.reskilll.com/"
            >
              <img
                className={sponsorImage}
                id={azdev}
                src="/sponsors/communityPartners/azdev.png"
                alt="Azure Developer Community"
              />
            </a>
          </div>
        </div>

        <div className={sponsorsInfo}>
          <div className={sponsorInfo}>
            <a rel="noreferrer" target="_blank" href="https://reskilll.com/">
              <img
                className={sponsorImage}
                id={reskill}
                src="/sponsors/communityPartners/reskilll.png"
                alt="Reskill"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartnerSection;
