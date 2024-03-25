import PropTypes from "prop-types";
import styles from "./Faq.module.css";
import { useState } from "react";

const { faqQuestionContent, faqCross, faqQuestion, faqAnswer } = styles;

const Faq = ({ questionId, question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  const toggleFaq = (questionId) => {
    const faqAnswer = document.getElementById(`${questionId}answer`);
    const cross = document.getElementById(`${questionId}cross`);

    setQuestionOpen(!questionOpen);

    if (questionOpen) {
      cross.style.rotate = "0deg";
      faqAnswer.style.maxHeight = "0";
    } else {
      cross.style.rotate = "45deg";
      const answerHeight = faqAnswer.scrollHeight + 10;
      faqAnswer.style.maxHeight = `${answerHeight}px`;
    }
  };

  return (
    <div
      className={faqQuestionContent}
      id={questionId}
      onClick={() => toggleFaq(questionId)}
    >
      <div className={faqQuestion}>
        <p>{question}</p>
        <img
          src="/icons/plus.png"
          alt="plus"
          id={questionId + "cross"}
          className={faqCross}
        />
      </div>
      <div
        className={faqAnswer}
        id={questionId + "answer"}
        style={{ transition: "max-height 0.3s ease-in-out" }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
};

export default Faq;
