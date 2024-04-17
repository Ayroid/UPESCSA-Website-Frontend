import HackathonNavbarPS from "../../../components/HackathonNavbarPS/HackathonNavbarPS";

import ContactSection from "../../../sections/ContactSection/ContactSection";
import ProblemStatement from "../../../sections/ProblemStatement/ProblemStatement";
import styles from "./ProblemStatementPage.module.css";

const { mainDiv } = styles;

const ProblemStatementPage = () => {
  return (
    <div className={mainDiv}>
      <HackathonNavbarPS />
      <ProblemStatement />
      <ContactSection />
    </div>
  );
};

export default ProblemStatementPage;
