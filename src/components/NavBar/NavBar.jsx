import styles from "./NavBar.module.css";

import NavItems from "../NavItems/NavItems";

// CSS STYLES
const { navBar } = styles;

// COMPONENT

const NavBar = () => {
  // DATA
  const navItems = [
    { title: "About", action: "#about" },
    { title: "Events", action: "#events" },
    { title: "Team", action: "#team" },
    { title: "CSR", action: "#csr" },
    { title: "Blogs", action: "#blogs" },
    { title: "Contact", action: "#contact" },
  ];

  // JSX
  return (
    <div className={navBar}>
      {navItems.map(({ title, action }) => (
        <NavItems key={title} action={action} title={title} />
      ))}
    </div>
  );
};

export default NavBar;
