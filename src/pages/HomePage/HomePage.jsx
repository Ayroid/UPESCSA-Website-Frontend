import styles from "./HomePage.module.css";

import Socials from "../../components/Socials/Socials";

// CSS STYLES
const {
  homePage,
  bgCircles,
  outerCircle,
  innerCircle,
  socialsDiv,
  arrowDiv,
  pageContent,
  verticalLine,
  pageHeading,
  verticalLine1,
  verticalLine2,
} = styles;

const HomePage = () => {
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
      <div className={arrowDiv}>
        <img src="/icons/triangleArrow.png" alt="arrow" />
      </div>
      <div className={pageContent}>
        <div className={pageHeading}>UPES</div>
        <hr className={verticalLine} id={verticalLine1} />
        <hr className={verticalLine} id={verticalLine2} />
        <div className={pageHeading}>CSA</div>
      </div>
    </div>
  );
};

export default HomePage;
