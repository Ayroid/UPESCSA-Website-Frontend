import { useEffect } from "react";
import styles from "./BlogsPage.module.css";

import useFetch from "../../hooks/useFetch";

import Blogs from "../../components/Blogs/Blogs";
import PageHeading from "../../components/PageHeading/PageHeading";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { blogsContainer, blogsDiv } = styles;

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, loading } = useFetch({
    url: "http://192.168.1.9:3000/api/blog/",
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={blogsContainer}>
      <PageHeading imgURL="/img/pageheaders/blogs.png" text="BLOGS" />
      <div className={blogsDiv}>
        {data.map((blog) => (
          <Blogs
            key={blog._id}
            blogImageURL={blog.blogImageURL}
            blogHeading={blog.blogTitle}
            blogAuthor={blog.blogAuthor}
            blogSummary={blog.blogSummary}
            blogURL={blog.blogURL}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
