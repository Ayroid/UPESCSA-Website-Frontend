import Proptypes from "prop-types";
import styles from "./Logo.module.css";

// CSS STYLES
const { logo } = styles;

const Logo = ({ height, src }) => {
  return (
    <img
      loading="lazy"
      className={logo}
      src={src}
      alt="UPESCSA Logo"
      style={{ height }}
    />
  );
};

Logo.propTypes = {
  height: Proptypes.string,
  src: Proptypes.string.isRequired,
};

export default Logo;
