import { useEffect } from "react";
import styles from "./CommitteePage.module.css";

import useFetch from "../../hooks/useFetch";

import ImageText from "../../components/ImageText/ImageText";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { committeePageContainer } = styles;

const CommitteePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: "http://192.168.1.9:3000/api/committee/",
  });

  if (loading) {
    return <Loading />;
  }

  // REPLACE WITH ERROR COMPONENT

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={committeePageContainer}>
      {data.map((committee) => (
        <ImageText
          key={committee._id}
          title={committee.committeeName}
          titleAlign="center"
          link={committee.committeePageURL}
          externalLink={false}
          mainImg={committee.committeeImageURL}
          textColor={"var(--textDark)"}
        />
      ))}
    </div>
  );
};

export default CommitteePage;
