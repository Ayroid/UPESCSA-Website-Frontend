import { useEffect } from "react";
import styles from "./CsrPage.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventGrid from "../../components/EventGrid/EventGrid";

// CSS STYLES
const { csrContainer, csrHeader } = styles;

const CsrPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/csr/`,
  });

  return (
    <div className={csrContainer}>
      <div className={csrHeader}>
        <PageHeading imgURL="/img/pageheaders/csr.jpg" text="CSR" />
      </div>
      <EventGrid data={data} loading={loading} error={error} />
    </div>
  );
};

export default CsrPage;
