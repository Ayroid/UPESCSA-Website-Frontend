import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

// CSS STYLES
const { pageNotFound, subHeading, heading, homeButton } = styles;

const PageNotFound = () => {
  return (
    <div className={pageNotFound}>
      <div className={heading}>404</div>
      <div className={subHeading}>Page Not Found</div>
      <Link to={"/"}>
        <button className={homeButton}>Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
