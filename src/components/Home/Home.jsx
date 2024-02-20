import Proptypes from "prop-types";
import styles from "./Home.module.css";

import Socials from "../Socials/Socials";

// CSS STYLES
const {
  homePage,
  bgCircles,
  outerCircle,
  innerCircle,
  socialsDiv,
  pageContent,
  verticalLine,
  pageHeading,
  verticalLine1,
  verticalLine2,
  popupTrigger,
} = styles;

const Home = ({ showTrigger, openPopup }) => {
  return (
    <div className={homePage}>
      <div className={bgCircles}>
        <div className={outerCircle}>
          <div className={innerCircle}></div>
        </div>
      </div>
      <div className={socialsDiv}>
        <Socials orientation={"column"} />
      </div>
      <div className={pageContent}>
        <div className={pageHeading}>UPES</div>
        <hr className={verticalLine} id={verticalLine1} />
        <hr className={verticalLine} id={verticalLine2} />
        <div className={pageHeading}>CSA</div>
      </div>
      {showTrigger && (
        <div className={popupTrigger} onClick={openPopup}>
          <img loading="lazy" src="/icons/annoucement.png" alt="annoucement" />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  showTrigger: Proptypes.bool.isRequired,
  openPopup: Proptypes.func.isRequired,
};

export default Home;
