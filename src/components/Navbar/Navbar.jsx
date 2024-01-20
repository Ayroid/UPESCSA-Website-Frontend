import styles from "./Navbar.module.css";

// COMPONENTS
import Navlinks from "../Navlinks/Navlinks";

// CSS STYLES
const { navbar, logoDiv, navLinks, verticalLine } = styles;

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
      </ul>
    </div>
  );
};

export default Navbar;
