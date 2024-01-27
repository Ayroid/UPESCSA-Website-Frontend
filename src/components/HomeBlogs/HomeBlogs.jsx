import styles from "./HomeBlogs.module.css";

import SectionHeading from "../SectionHeading/SectionHeading";
import ImageText from "../ImageText/ImageText";
import ShowMore from "../ShowMore/ShowMore";

// CSS STYLES
const { homeBlogsContainer, blogsDiv } = styles;

const HomeBlogs = () => {
  // BLOGS DATA
  const blogsData = [
    {
      img: "/img/blogs/placeholder.png",
      title: "Navigating the Digital Landscape: A Guide to Online Privacy",
      author: "Ayroid",
      link: "https://codewarriors.in",
    },
    {
      img: "/img/blogs/placeholder.png",
      title: "Unlocking the Power of Mindfulness: A Journey to Inner Peace",
      author: "Ayush",
      link: "https://givemycertificate.com",
    },
    {
      img: "/img/blogs/placeholder.png",
      title: "The Future of Sustainable Living: Eco-Friendly Innovations",
      author: "Devansh",
      link: "https://www.linkedin.com/company/awsugmum/",
    },
    {
      img: "/img/blogs/placeholder.png",
      title: "Mastering the Art of Remote Work: Productivity Hacks and Tips",
      author: "Aman",
      link: "https://www.newtonschool.co/",
    },
  ];

  return (
    <div className={homeBlogsContainer} id="blogs">
      <SectionHeading
        heading="Blogs"
        underlineColor="var(--blueUnderLine)"
        textColor="var(--textDark)"
      />
      <div className={blogsDiv}>
        {blogsData.map((data) => (
          <ImageText
            key={data.title}
            title={data.title}
            titleAlign="left"
            subTitle={data.author}
            subTitleAlign="left"
            link={data.link}
            mainImg={data.img}
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
