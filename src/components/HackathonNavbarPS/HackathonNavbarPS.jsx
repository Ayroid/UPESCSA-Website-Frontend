import { useEffect, useState } from "react";
import styles from "./HackathonNavbarPS.module.css";

import { Link } from "react-router-dom";

// COMPONENTS
import Logo from "../Logo/Logo";
import Socials from "../HackathonSocials/HackathonSocials";

// CSS STYLES
const {
  navbarContainer,
  navBarDiv,
  navbar,
  hamburgerDiv,
  hamburger,
  logoDiv,
  socialsDiv,
  scrollUp,
  scrollDown,
  upescsaLogo,
  upesLogo,
} = styles;

const HackathonNavbarPS = () => {
  // STATES
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // FUNCTIONS

  let navbarStyle = {};

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (screenWidth < 1100) {
    navbarStyle = {
      backgroundColor: "var(--hacknavDark)",
    };
  } else {
    navbarStyle = {
      backgroundColor:
        scrollPosition > 50 ? "var(--hacknavDark)" : "transparent",
    };
  }

  const displayNavBar = () => {
    if (window.innerWidth > 1100) {
      return;
    }
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      const navbar = document.getElementById("navbar");
      if (newOpen) {
        navbar.classList.remove(scrollUp);
        navbar.classList.add(scrollDown);
        document.getElementById("navbardiv").style.height = "100vh";
      } else {
        navbar.classList.remove(scrollDown);
        navbar.classList.add(scrollUp);
        document.getElementById("navbardiv").style.height = "0vh";
      }
      return newOpen;
    });
  };

  return (
    <div className={navbarContainer} style={navbarStyle}>
      <div className={hamburgerDiv} onClick={displayNavBar}>
        {open ? (
          <img
            loading="lazy"
            className={hamburger}
            src="/icons/hamburgercross.png"
            alt="hamburger"
          />
        ) : (
          <img
            loading="lazy"
            className={hamburger}
            src="/icons/hamburger.png"
            alt="hamburger"
          />
        )}
      </div>
      <div className={navBarDiv} id="navbardiv" onClick={displayNavBar}>
        <div className={navbar} id="navbar">
          <div className={logoDiv} id={upescsaLogo}>
            <Link to={"/"}>
              <Logo height="4.5rem" src="/logo/upescsa.png" />
            </Link>
          </div>
          <div className={logoDiv} id={upesLogo}>
            <a href="https://www.upes.ac.in/" target="_blank" rel="noreferrer">
              <Logo height="3rem" src="/logo/upes.png" />
            </a>
          </div>
          <div className={socialsDiv}>
            <Socials orientation={"row"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonNavbarPS;
