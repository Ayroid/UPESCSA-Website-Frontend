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
} = styles;

const SponsorsSection = () => {
  return (
    <div className={mainDiv} id="sponsors">
      <div className={sponsorsHeadingDiv}>
        <h1 className={subHeading}>SUPPORTED BY</h1>
        <h1 className="heading" id={sponsorsHeading}>
          OUR SPONSORS
        </h1>
      </div>
      <div className={sponsorsDiv}>
        <div className={sponsorsInfo}>
          <div className={sponsorInfo}>
            <a target="_blank" href="https://givemycertificate.com/">
              <img
                className={sponsorImage}
                src="/sponsors/sponsors/givemycertificate.png"
                alt="Azure Developer Community"
              />
            </a>
          </div>
        </div>

        <div className={sponsorsInfo}>
          <div className={sponsorInfo}>
            <a target="_blank" href="https://www.interviewbuddy.in/">
              <img
                className={sponsorImage}
                src="/sponsors/sponsors/interviewbuddy.png"
                alt="Reskill"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
