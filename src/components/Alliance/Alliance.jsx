import styles from "./Alliance.module.css";

import useFetch from "../../hooks/useFetch";

import SectionHeading from "../SectionHeading/SectionHeading";
import ImageText from "../ImageText/ImageText";
import Loading from "../Loading/Loading";

// CSS STYLES
const { allianceContainer, sectionHeading, allianceDiv } = styles;

const Alliance = () => {
  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/alliance/`,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={allianceContainer} id="alliance">
      <div className={sectionHeading}>
        <SectionHeading
          heading="Alliance"
          underlineColor="var(--yellowUnderLine)"
        />
      </div>
      <div className={allianceDiv}>
        {data.map((data) => (
          <ImageText
            key={data._id}
            id={data._id}
            title={data.allianceName}
            titleAlign="center"
            link={data.allianceWebsiteURL}
            mainImg={data.allianceImageURL}
            externalLink={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Alliance;
