import { useState } from "react";
import styles from "./TeamPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import TeamPageSwitch from "../../components/TeamPageSwitch/TeamPageSwitch";
import CommitteePage from "../CommitteePage/CommitteePage";
import ManagementPage from "../ManagementPage/ManagementPage";

// CSS STYLES
const { teamPageContainer, teamPageDiv } = styles;

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState(true);

  const switchPage = (value) => {
    if (activeTab === value) {
      return;
    } else {
      setActiveTab(value);
    }
  };

  return (
    <div className={teamPageContainer}>
      <PageHeading imgURL="/img/pageheaders/team.png" text="TEAM" />
      <div className={teamPageDiv}>
        <TeamPageSwitch activeTab={activeTab} changeActiveTab={switchPage} />
        {activeTab ? <ManagementPage /> : <CommitteePage />}
      </div>
    </div>
  );
};

export default TeamPage;
