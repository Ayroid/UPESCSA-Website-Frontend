import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// COMPONENTS
import Navlinks from "../Navlinks/Navlinks";
import Socials from "../Socials/Socials";

// CSS STYLES
const {
  navbarContainer,
  navbar,
  hamburgerDiv,
  hamburger,
  logoDiv,
  navLinks,
  verticalLine,
  mobileLine,
  socialsDiv,
  scrollUp,
  scrollDown,
} = styles;

const Navbar = () => {
  // STATES
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // DATA
  const navlinks = [
    {
      title: "About",
      action: "#about",
      separatePage: false,
    },
    {
      title: "Events",
      action: "#events",
      separatePage: false,
    },
    {
      title: "Alliance",
      action: "#alliance",
      separatePage: false,
    },
    {
      title: "Team",
      action: "#team",
      separatePage: false,
    },
    {
      title: "CSR",
      action: "/csr",
      separatePage: true,
    },
    {
      title: "Blogs",
      action: "#blogs",
      separatePage: false,
    },
    {
      title: "Contact",
      action: "#contact",
      separatePage: false,
    },
  ];

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

  if (screenWidth < 950) {
    navbarStyle = {
      backgroundColor: "var(--navDark)",
    };
  } else {
    navbarStyle = {
      backgroundColor: scrollPosition > 50 ? "var(--navDark)" : "transparent",
    };
  }

  const displayNavBar = () => {
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      const navbar = document.getElementById("navbar");
      if (screen.width > 950) {
        return;
      }
      if (newOpen) {
        navbar.classList.remove(scrollUp);
        navbar.classList.add(scrollDown);
      } else {
        navbar.classList.remove(scrollDown);
        navbar.classList.add(scrollUp);
      }
      return newOpen;
    });
  };

  return (
    <div className={navbarContainer} style={navbarStyle}>
      <div className={hamburgerDiv} onClick={displayNavBar}>
        {open ? (
          <img
            className={hamburger}
            src="/icons/hamburgercross.png"
            alt="hamburger"
          />
        ) : (
          <img
            className={hamburger}
            src="/icons/hamburger.png"
            alt="hamburger"
          />
        )}
      </div>
      <div className={navbar} id="navbar">
        <div className={logoDiv}>
          <Navlinks
            title={"UPESCSA"}
            size={"1.4rem"}
            action={"/"}
            separatePage={false}
            closeNavbar={displayNavBar}
          />
        </div>
        <ul className={navLinks}>
          <hr className={mobileLine} />
          {navlinks.map((navlink) => (
            <Navlinks
              key={navlink.title}
              title={navlink.title}
              action={navlink.action}
              separatePage={navlink.separatePage}
              closeNavbar={displayNavBar}
            />
          ))}
          <hr className={verticalLine} />
          <Navlinks
            title={"Evortal"}
            action={"/evortal"}
            separatePage={true}
            closeNavbar={displayNavBar}
          />
          <hr className={mobileLine} />
        </ul>
        <div className={socialsDiv}>
          <Socials orientation={"row"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
