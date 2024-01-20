import styles from "./HomePage.module.css";

import Navbar from "../../components/Navbar/Navbar";

const { navbarContainer } = styles;

const HomePage = () => {
  return (
    <div className={navbarContainer}>
      <Navbar />
    </div>
  );
};

export default HomePage;
