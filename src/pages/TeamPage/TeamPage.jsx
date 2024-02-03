import Proptypes from "prop-types";
import { lazy, Suspense } from "react";
import styles from "./TeamPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import CommitteePage from "../CommitteePage/CommitteePage";
import Loading from "../../components/Loading/Loading";
import TeamPageSwitch from "../../components/TeamPageSwitch/TeamPageSwitch";

// LAZY LOAD COMPONENTS
const ManagementPage = lazy(() => import("../ManagementPage/ManagementPage"));

// CSS STYLES
const { teamPageContainer, teamPageDiv } = styles;

const TeamPage = ({ activeTab }) => {
  return (
    <div className={teamPageContainer}>
      <PageHeading imgURL="/img/pageheaders/team.png" text="TEAM" />
      <div className={teamPageDiv}>
        <TeamPageSwitch activeTab={activeTab === "team"} />
        <Suspense fallback={<Loading />}>
          {activeTab === "team" ? <ManagementPage /> : <CommitteePage />}
        </Suspense>
      </div>
    </div>
  );
};

TeamPage.propTypes = {
  activeTab: Proptypes.string,
};

export default TeamPage;
