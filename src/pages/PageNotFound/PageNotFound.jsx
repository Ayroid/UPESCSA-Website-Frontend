import { useEffect } from "react";
import styles from "./PageNotFound.module.css";

// CSS STYLES
const { pageNotFound, innerContent, subHeading, heading } = styles;

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <div className={pageNotFound}>
      <div className={innerContent}>
        <div className={heading}>404</div>
        <div className={subHeading}>Page Not Found</div>
      </div>
    </div>
  );
};

export default PageNotFound;
