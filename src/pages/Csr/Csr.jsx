import styles from "./Csr.module.css";

import Navbar from "../../components/Navbar/Navbar.jsx";

const { navbarContainer } = styles;

const Csr = () => {
  return (
    <div className={navbarContainer}>
      <Navbar />
    </div>
  );
};

export default Csr;
