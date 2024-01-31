import { useEffect } from "react";
import styles from "./CsrPage.module.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventGrid from "../../components/EventGrid/EventGrid";

// CSS STYLES
const { csrContainer, csrHeader } = styles;

const CsrPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // EVENTS DATA
  const csrData = [
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 2",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 2",
      spany: "span 1",
    },
    {
      img: "/img/blogs/placeholder.png",
      spanx: "span 1",
      spany: "span 1",
    },
  ];

  return (
    <div className={csrContainer}>
      <div className={csrHeader}>
        <PageHeading imgURL="/img/pageheaders/csr.png" text="CSR" />
      </div>
      <EventGrid data={csrData} />
    </div>
  );
};

export default CsrPage;
