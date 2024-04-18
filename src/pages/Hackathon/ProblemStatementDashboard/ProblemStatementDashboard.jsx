import HackathonNavbarPS from "../../../components/HackathonNavbarPS/HackathonNavbarPS";

import ContactSection from "../../../sections/ContactSection/ContactSection";
import ProblemStatement from "../../../sections/ProblemStatementDash/ProblemStatementDash";
import styles from "./ProblemStatementDashboard.module.css";

const { mainDiv } = styles;

const ProblemStatementDashboard = () => {
  return (
    <div className={mainDiv}>
      <HackathonNavbarPS />
      <ProblemStatement />
      <ContactSection />
    </div>
  );
};

export default ProblemStatementDashboard;
