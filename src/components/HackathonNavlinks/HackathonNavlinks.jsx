import Proptypes from "prop-types";
import styles from "./HackathonNavlinks.module.css";

// import { Link } from "react-router-dom";

// CSS STYLES
const { navLinks } = styles;

const HackathonNavlinks = ({ title, action, size, textStyle, closeNavbar }) => {
  return (
    <li
      className={navLinks}
      style={{ fontSize: size }}
      onClick={() => closeNavbar}
    >
      <a href={action} style={textStyle}>
        {title}
      </a>
    </li>
  );
};

HackathonNavlinks.propTypes = {
  title: Proptypes.string.isRequired,
  action: Proptypes.string.isRequired,
  size: Proptypes.string,
  textStyle: Proptypes.object,
  closeNavbar: Proptypes.func.isRequired,
};

export default HackathonNavlinks;
