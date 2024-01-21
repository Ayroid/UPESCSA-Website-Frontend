import styles from "./Logo.module.css";

// CSS STYLES
const { logo } = styles;

const Logo = () => {
  return (
    <img
      className={logo}
      src="/logo/upescsa_nobg_high.png"
      alt="UPESCSA Logo"
    />
  );
};

export default Logo;
