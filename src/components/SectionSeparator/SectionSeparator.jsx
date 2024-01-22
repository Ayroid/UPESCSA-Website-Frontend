import styles from "./SectionSeparator.module.css";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const innerDiv = [styles.innerDiv].join("");

const SectionSeparator = () => {
  return (
    <div className={mainDiv}>
      <div className={innerDiv}>
        <hr />
        <img src="/icons/hamburgercross.png" alt="cross" />
        <hr />
      </div>
    </div>
  );
};

export default SectionSeparator;
