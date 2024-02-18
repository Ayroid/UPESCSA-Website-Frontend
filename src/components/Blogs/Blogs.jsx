import Proptypes from "prop-types";
import styles from "./Blogs.module.css";

// CSS STYLES
const {
  blogsContainer,
  blogsImage,
  blogsDescripton,
  blogsHeading,
  blogsAuthor,
  blogsSummary,
  blogsDetails,
  blogsRedirectButton,
} = styles;

const Blogs = ({
  blogImageURL,
  blogHeading,
  blogAuthor,
  blogSummary,
  blogURL,
}) => {
  return (
    <div className={blogsContainer}>
      <div className={blogsImage}>
        <img loading="lazy" src={blogImageURL} alt="blogPoster" />
      </div>
      <div className={blogsDescripton}>
        <h4 className={blogsHeading}>{blogHeading}</h4>
        <h6 className={blogsAuthor}>{blogAuthor}</h6>
        <p className={blogsSummary}>{blogSummary}</p>
        <div className={blogsDetails}>
          <a
            href={blogURL}
            className={blogsRedirectButton}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "var(--buttonLink)",
            }}
          >
            Complete Blog
          </a>
        </div>
      </div>
    </div>
  );
};
Blogs.propTypes = {
  blogImageURL: Proptypes.string.isRequired,
  blogHeading: Proptypes.string.isRequired,
  blogAuthor: Proptypes.string.isRequired,
  blogSummary: Proptypes.string.isRequired,
  blogURL: Proptypes.string.isRequired,
};

export default Blogs;
