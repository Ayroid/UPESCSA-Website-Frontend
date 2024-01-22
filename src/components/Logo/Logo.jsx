import Proptypes from "prop-types";
import styles from "./Logo.module.css";

// CSS STYLES
const { logo } = styles;

const Logo = ({ height }) => {
  return (
    <img
      className={logo}
      src="/logo/upescsa_nobg_high.png"
      alt="UPESCSA Logo"
      style={{ height }}
    />
  );
};

Logo.propTypes = {
  height: Proptypes.string,
};

export default Logo;
