import styles from "./HomePage.module.css";

// CSS STYLES
const {
  homePage,
  pageContent,
  verticalLine,
  pageHeading,
  verticalLine1,
  verticalLine2,
} = styles;

const HomePage = () => {
  return (
    <div className={homePage}>
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
