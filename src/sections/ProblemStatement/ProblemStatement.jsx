import styles from "./ProblemStatement.module.css";
import React, { useState } from "react";
import ProblemStatementSelection from "../../components/ProblemStatementSelection/ProblemStatementSelection";

const {
  mainDiv,
  problemStatementDiv,
  problemStatementInfo,
  problemStatementTitles,
  problemStatementHeading,
  statementButton,
} = styles;

const ProblemStatement = () => {
  const [selectedStatement, setSelectedStatement] = useState(null);
  const [showSelection, setShowSelection] = useState(false);

  const panel = [
    {
      id: "PS001",
      title: "Problem Statement Title 1",
      byOrganization: "Organization Name 1",
      sectorDomain: "Sector/Domain 1",
      problemDescription: "This is the problem description 1.",
      functionalRequirement: "Functional requirement of the solution 1.",
      nonFunctionalRequirement: "Non-functional requirement of the solution 1.",
    },
    {
      id: "PS002",
      title: "Problem Statement Title 2",
      byOrganization: "Organization Name 2",
      sectorDomain: "Sector/Domain 2",
      problemDescription: "This is the problem description 2.",
      functionalRequirement: "Functional requirement of the solution 2.",
      nonFunctionalRequirement: "Non-functional requirement of the solution 2.",
    },
  ];

  const openPopup = (statement) => {
    setSelectedStatement(statement);
    setShowSelection(true);
  };

  const closePopup = () => {
    setSelectedStatement(null);
    setShowSelection(false);
  };

  return (
    <div className={mainDiv} id="problemStatement">
      <div className={problemStatementHeading}>
        <h1 className="heading">Problem Statements</h1>
      </div>
      <div className={problemStatementDiv}>
        {panel.map((statement, index) => (
          <div className={problemStatementInfo} key={index}>
            <h3>PS ID: {statement.id}</h3>
            <div className={problemStatementTitles}>
              <h3>PS Title: {statement.title}</h3>
            </div>
            <p>PS By Organization: {statement.byOrganization}</p>
            <p>PS Sector/Domain: {statement.sectorDomain}</p>

            <div className={problemStatementTitles}>
              <div>
                <h4>Problem Description:</h4>
                <p>{statement.problemDescription}</p>
              </div>
              <div>
                <h4>Functional Requirement of Solution:</h4>
                <p>{statement.functionalRequirement}</p>
              </div>
              <div>
                <h4>Non-Functional Requirement of Solution:</h4>
                <p>{statement.nonFunctionalRequirement}</p>
              </div>
            </div>

            <button className={statementButton} onClick={() => openPopup(statement)}>Choose This problem Statement</button>
          </div>
        ))}
      </div>

      {showSelection && (
        <ProblemStatementSelection
          statement={selectedStatement}
          onClose={closePopup}
        />
      )}

    </div>
  );
};

export default ProblemStatement;
