import styles from "./HomeBlogs.module.css";

import useFetch from "../../hooks/useFetch";

import SectionHeading from "../SectionHeading/SectionHeading";
import ImageText from "../ImageText/ImageText";
import ShowMore from "../ShowMore/ShowMore";
import Loading from "../Loading/Loading";

// CSS STYLES
const { homeBlogsContainer, blogsDiv } = styles;

const HomeBlogs = () => {
  const { data, loading } = useFetch({
    url: "http://192.168.1.9:3000/api/blogs/",
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={homeBlogsContainer} id="blogs">
      <SectionHeading
        heading="Blogs"
        underlineColor="var(--blueUnderLine)"
        textColor="var(--textDark)"
      />
      <div className={blogsDiv}>
        {data.map((data) => (
          <ImageText
            key={data._id}
            title={data.blogTitle}
            titleAlign="left"
            subTitle={data.blogAuthor}
            subTitleAlign="left"
            link={data.blogURL}
            mainImg={data.blogImageURL}
            externalLink={true}
            textColor="var(--textDark)"
          />
        ))}
      </div>
      <ShowMore link="/blogs" />
    </div>
  );
};

export default HomeBlogs;
