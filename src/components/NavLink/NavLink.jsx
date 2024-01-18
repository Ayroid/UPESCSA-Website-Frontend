import PropTypes from "prop-types";

// CSS STYLES

const NavLink = ({ title }) => {
  return <div>{title}</div>;
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavLink;
