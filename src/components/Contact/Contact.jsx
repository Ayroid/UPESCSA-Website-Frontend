import styles from "./Contact.module.css";

import Socials from "../Socials/Socials";
import Logo from "../Logo/Logo";

// CSS STYLES
const { contactContainer, socialsDiv, logoDiv, contactInfoDiv, copyRight } =
  styles;

const Contact = () => {
  return (
    <div className={contactContainer}>
      <div>
        <div className={socialsDiv}>
          <Socials orientation="row" gap="1rem" />
        </div>
        <div className={logoDiv}>
          <Logo />
        </div>
        <div className={contactInfoDiv}></div>
      </div>
      <div className={copyRight}>
        Copyright © 2024 All rights reserved | Designed and Developed by UPES
        CSA Technical Team
      </div>
    </div>
  );
};

export default Contact;
