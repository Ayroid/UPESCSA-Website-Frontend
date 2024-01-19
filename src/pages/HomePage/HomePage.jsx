import NavLink from "../../components/NavItems/NavItems";

const HomePage = () => {
  const navLinks = [
    { title: "About", action: "#about" },
    { title: "Events", action: "#events" },
    { title: "Team", action: "#team" },
    { title: "CSR", action: "#csr" },
    { title: "Blogs", action: "#blogs" },
    { title: "Contact", action: "#contact" },
  ];

  return (
    <div>
      {navLinks.map(({ title, action }) => (
        <NavLink key={title} action={action} title={title} />
      ))}
    </div>
  );
};

export default HomePage;
