import styles from "./ManagementPage.module.css";

import { useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import ImageText from "../../components/ImageText/ImageText";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { managementPageContainer, managementDiv } = styles;

const ManagementPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: "http://192.168.1.9:3000/api/head/",
  });

  if (loading) {
    return <Loading />;
  }

  // REPLACE WITH ERROR COMPONENT

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  const faculties = data
    .filter((member) => member.category === "Faculty")
    .sort((a, b) => a.order - b.order);

  const presidents = data
    .filter((member) => member.category === "President")
    .sort((a, b) => a.order - b.order);

  const management = data
    .filter((member) => member.category === "Management")
    .sort((a, b) => a.order - b.order);

  const heads = data
    .filter((member) => member.category === "Heads")
    .sort((a, b) => a.order - b.order);

  const associates = data
    .filter((member) => member.category === "Associate Heads")
    .sort((a, b) => a.order - b.order);

  return (
    <div className={managementPageContainer}>
      <h2>Faculty</h2>
      <div className={managementDiv}>
        {faculties.map((member) => (
          <ImageText
            key={member._id}
            title={member.name}
            titleAlign="center"
            subTitle={member.position}
            subTitleAlign="center"
            link={member.linkedInURL}
            mainImg={member.headImgURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Management</h2>
      <div className={managementDiv}>
        {presidents.map((member) => (
          <ImageText
            key={member._id}
            title={member.name}
            titleAlign="center"
            subTitle={member.position}
            subTitleAlign="center"
            link={member.linkedInURL}
            mainImg={member.headImgURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <div className={managementDiv}>
        {management.map((member) => (
          <ImageText
            key={member._id}
            title={member.name}
            titleAlign="center"
            subTitle={member.position}
            subTitleAlign="center"
            link={member.linkedInURL}
            mainImg={member.headImgURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Heads</h2>
      <div className={managementDiv}>
        {heads.map((member) => (
          <ImageText
            key={member._id}
            title={member.name}
            titleAlign="center"
            subTitle={member.position}
            subTitleAlign="center"
            link={member.linkedInURL}
            mainImg={member.headImgURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Associate Heads</h2>
      <div className={managementDiv}>
        {associates.map((member) => (
          <ImageText
            key={member._id}
            title={member.name}
            titleAlign="center"
            subTitle={member.position}
            subTitleAlign="center"
            link={member.linkedInURL}
            mainImg={member.headImgURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;
