import Faq from "../../components/Faq/Faq";

import styles from "./FaqSection.module.css";

const { mainDiv, faqQuestions } = styles;

const FaqSection = () => {
  const faqData = [
    {
      question: "What is a Hackathon?",
      answer:
        "A hackathon is an event where individuals or teams collaborate intensively, usually over a short period, to develop innovative projects to solve specific challenges. Hackathons bring together programmers, designers, and other tech enthusiasts to tackle challenges, explore new technologies, and showcase their skills, fostering an environment of creativity, learning, and rapid prototyping in the technology sector.",
    },
    {
      question: "How does an online hackathon work?",
      answer:
        "In an online hackathon, participants join remotely using online collaboration tools. They work on their projects from their own locations, communicate with team members and organisers through digital platforms, and submit their projects on platforms like GitHub. Online hackathons offer the flexibility to work from anywhere, connect with a global community of participants, and engage in a wide range of activities, such as workshops, mentorship sessions, and networking events.",
    },
    {
      question: "Do we need to be good at coding to participate?",
      answer:
        "No, it is not absolutely necessary to have good coding skills, Hackathons can also be a great way to solve problems using your design, business, or marketing skills. You can also join a team and contribute to the project in other ways, such as creating a business plan, designing a user interface, or developing a marketing strategy.",
    },
    {
      question:
        "How would my resume benefit from participating in this hackathon?",
      answer:
        "Participating in a hackathon can be a great way to enhance your resume. It demonstrates your ability to work in a team, solve problems, and think creatively. It also shows that you are passionate about learning new technologies and are willing to take on challenges. Additionally, you can showcase the projects you worked on during the hackathon on your resume and GitHub profile, which can help you stand out to potential employers.",
    },
  ];

  return (
    <div className={mainDiv} id="faq">
      <h1 className="heading" style={{ marginInline: "1.5rem" }}>
        Frequently Asked Questions
      </h1>
      <div className={faqQuestions}>
        {faqData.map((faq, index) => (
          <Faq
            key={index}
            questionId={"faqQuestion" + index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
