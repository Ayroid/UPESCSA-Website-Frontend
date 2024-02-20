import { useEffect } from "react";
import styles from "./CsrPage.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventGrid from "../../components/EventGrid/EventGrid";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { csrContainer, csrHeader } = styles;

const CsrPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/csr/`,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={csrContainer}>
      <div className={csrHeader}>
        <PageHeading imgURL="/img/pageheaders/csr.jpg" text="CSR" />
      </div>
      <EventGrid data={data} />
    </div>
  );
};

export default CsrPage;
