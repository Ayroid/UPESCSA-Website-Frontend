import Proptypes from "prop-types";
import styles from "./ContactFields.module.css";

// CSS STYLES
const { contactFieldsContainer, contactFieldLogo, contactFieldInfo } = styles;

const ContactFields = ({ imageSrc, imageAlt, infoText }) => {
  return (
        <div className={contactFieldsContainer}>
        <img className={contactFieldLogo} src={imageSrc} alt={imageAlt} />
        <p className={contactFieldInfo}>{infoText}</p>
        </div>
  );
};

ContactFields.propTypes = {
  imageSrc: Proptypes.string.isRequired,
  imageAlt: Proptypes.string.isRequired,
  infoText: Proptypes.string.isRequired,
};

export default ContactFields;
