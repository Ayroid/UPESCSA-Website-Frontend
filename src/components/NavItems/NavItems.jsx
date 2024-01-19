import PropTypes from "prop-types";
import styles from "./NavItems.module.css";

// CSS STYLES
const navItems = [styles.listItem].join("");

const NavItems = ({ title, action, closeNavbar }) => {
  return (
    <li className={navItems}>
      <a href={action} onClick={closeNavbar}>
        {title}
      </a>
    </li>
  );
};

NavItems.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  closeNavbar: PropTypes.func.isRequired,
};

export default NavItems;
