import styles from "./ProblemStatement.module.css";
import React, { useState } from 'react';

const {
  mainDiv,
  problemStatementDiv,
  problemStatementInfo,
  problemStatementTitles,
  problemStatementHeading,
  progressIndicator
} = styles;

const ProblemStatement = () => {
const [currentSlide, setCurrentSlide] = useState(0);
  const panel = [
    {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
     {
        id: "PS001",
        title: "Problem Statement Title",
        byOrganization: "Organization Name",
        sectorDomain: "Sector/Domain",
        problemDescription: "This is the problem description.",
        functionalRequirement: "Functional requirement of the solution.",
        nonFunctionalRequirement: "Non-functional requirement of the solution.",
     },
    
  ];
  const handleScroll = (e) => {
    const container = e.target;
    const slideWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const currentSlide = Math.round(scrollLeft / slideWidth);
    setCurrentSlide(currentSlide);
 };
  return (
    <div className={mainDiv} id="campus">
       <div className={problemStatementHeading}>
         <h1 className="heading" id={problemStatementHeading}>
           Problem Statements
         </h1>
       </div>
       <div className={progressIndicator}>
        {currentSlide + 1} / {panel.length}
      </div>
       <div className={problemStatementDiv} onScroll={handleScroll}>
         {panel.map((statement, index) => (
           <div className={problemStatementInfo} key={index}>
             <h3>PS ID: {statement.id}</h3>
             <div className={problemStatementTitles}>
                <h3>PS Title:{statement.title}</h3>
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
         
           </div>
         ))}
       </div>
    </div>
   );   
};

export default ProblemStatement;
  