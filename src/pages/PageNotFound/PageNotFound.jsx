import styles from "./PageNotFound.module.css";

// CSS STYLES
const { pageNotFound, subHeading, heading } = styles;

const PageNotFound = () => {
  return (
    <div className={pageNotFound}>
      <div className={heading}>404</div>
      <div className={subHeading}>Page Not Found</div>
    </div>
  );
};

export default PageNotFound;
