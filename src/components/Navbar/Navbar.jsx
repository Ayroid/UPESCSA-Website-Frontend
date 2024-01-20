import styles from "./Navbar.module.css";

// COMPONENTS
import Navlinks from "../Navlinks/Navlinks";
import Socials from "../Socials/Socials";

// CSS STYLES
const { navbar, logoDiv, navLinks, verticalLine, mobileLine, socialsDiv } =
  styles;

const Navbar = () => {
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

  return (
    <div className={navbar}>
      <div className={logoDiv}>
        <Navlinks
          title={"UPESCSA"}
          size={"1.4rem"}
          action={"/"}
          separatePage={false}
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
          />
        ))}
        <hr className={verticalLine} />
        <Navlinks title={"Evortal"} action={"/evortal"} separatePage={true} />
        <hr className={mobileLine} />
      </ul>
      <div className={socialsDiv}>
        <Socials orientation={"row"} />
      </div>
    </div>
  );
};

export default Navbar;
