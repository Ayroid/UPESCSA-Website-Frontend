import Proptypes from "prop-types";
import styles from "./Navlinks.module.css";

import { Link } from "react-router-dom";

// CSS STYLES
const { navLinks } = styles;

const Navlinks = ({ title, action, separatePage, size }) => {
  return (
    <li className={navLinks} style={{ fontSize: size }}>
      {separatePage ? (
        <Link to={action}>{title}</Link>
      ) : (
        // <a href={action}>{title}</a>
        <Link to={`/${action}`}>{title}</Link>
      )}
    </li>
  );
};

Navlinks.propTypes = {
  title: Proptypes.string.isRequired,
  action: Proptypes.string.isRequired,
  separatePage: Proptypes.bool.isRequired,
  size: Proptypes.string,
};

export default Navlinks;
