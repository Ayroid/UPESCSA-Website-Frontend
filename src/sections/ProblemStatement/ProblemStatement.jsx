import styles from "./ProblemStatement.module.css";
const {
  mainDiv,
  problemStatementDiv,
  problemStatementInfo,
  problemStatementTitles,
  problemStatementHeading
} = styles;

const ProblemStatement = () => {
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
  ];

  return (
    <div className={mainDiv} id="campus">
       <div className={problemStatementHeading}>
         <h1 className="heading" id={problemStatementHeading}>
           Problem Statement
         </h1>
       </div>

       <div className={problemStatementDiv}>
         {panel.map((statement, index) => (
           <div className={problemStatementInfo} key={index}>
             <h2>PS ID: {statement.id}</h2>
             <div className={problemStatementTitles}>
                <h4>PS Title:</h4>
             </div>
             <h3>{statement.title}</h3>
             
             <p>PS By Organization: {statement.byOrganization}</p>
             <p>PS Sector/Domain: {statement.sectorDomain}</p>

             <div className={problemStatementTitles}>
                <h4>Problem Description:</h4>
             </div>
             <p>{statement.problemDescription}</p>
             
             <div className={problemStatementTitles}>
                <h4>Functional Requirement of Solution:</h4>
             </div>
             <p>{statement.functionalRequirement}</p>

             <div className={problemStatementTitles}>
                <h4>Non-Functional Requirement of Solution:</h4>
             </div>
             <p>{statement.nonFunctionalRequirement}</p>
           </div>
         ))}
       </div>
    </div>
   );   
};

export default ProblemStatement;
  