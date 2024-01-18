import NavLink from "../../components/NavLink/NavLink";

const HomePage = () => {
  const navLinks = [
    { title: "Home", path: "/" },
  ];

  return (
    <div>
      {navLinks.map(({ title }) => (
        <NavLink key={title} title={title} />
      ))}
    </div>
  );
};

export default HomePage;
