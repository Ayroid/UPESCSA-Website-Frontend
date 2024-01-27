import styles from "./BlogsPage.module.css";

import Blogs from "../../components/Blogs/Blogs";
import PageHeading from "../../components/PageHeading/PageHeading";

// CSS STYLES
const { blogsContainer, blogsDiv } = styles;

const BlogsPage = () => {
  // BLOGS DATA
  const blogsData = [
    {
      blogsImageURL: "/img/events/live/valo.png",
      blogsHeading: "Blog 1",
      blogsText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      blogURL: "https://www.blogger.com/about/?bpli=1",
      activeblogs: true,
    },
    {
      blogsImageURL: "/img/events/live/valo.png",
      blogsHeading: "Blog 2",
      blogsText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      blogURL: "https://www.blogger.com/about/?bpli=1",
      activeblogs: true,
    },
  ];

  return (
    <div className={blogsContainer}>
      <PageHeading imgURL="/img/pageheaders/blogs.png" text="BLOGS" />
      <div className={blogsDiv}>
        {blogsData.map((blogs) => (
          <Blogs
            key={blogs.blogsHeading}
            blogImageURL={blogs.blogsImageURL}
            blogHeading={blogs.blogsHeading}
            blogSummary={blogs.blogsText}
            blogURL={blogs.blogURL}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
