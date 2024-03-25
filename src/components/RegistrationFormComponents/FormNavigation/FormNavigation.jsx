import PropTypes from "prop-types";

import styles from "./FormNavigation.module.css";

const { navigationButtons, navigationButton } = styles;

const FormNavigation = ({
  pageVisible,
  moveToPreviousPage,
  moveToNextPage,
}) => {
  return (
    <div className={navigationButtons}>
      {pageVisible > 1 && (
        <button
          className={navigationButton}
          type="button"
          onClick={() => moveToPreviousPage()}
        >
          Prev
        </button>
      )}
      <button
        className={navigationButton}
        type="button"
        onClick={() => moveToNextPage()}
      >
        {pageVisible < 3 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

FormNavigation.propTypes = {
  pageVisible: PropTypes.number.isRequired,
  moveToPreviousPage: PropTypes.func.isRequired,
  moveToNextPage: PropTypes.func.isRequired,
};

export default FormNavigation;
