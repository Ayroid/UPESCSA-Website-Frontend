import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import HomeEvents from "../../components/HomeEvents/HomeEvents";
import Alliance from "../../components/Alliance/Alliance";
import HomeBlogs from "../../components/HomeBlogs/HomeBlogs";
import { useEffect } from "react";

const HomePage = () => {
  const currentHash = window.location.hash;

  useEffect(() => {
    const targetElement = document.getElementById(currentHash.substring(1));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentHash]);

  return (
    <>
      <Home />
      <About />
      <HomeEvents />
      <Alliance />
      <HomeBlogs />
    </>
  );
};

export default HomePage;
