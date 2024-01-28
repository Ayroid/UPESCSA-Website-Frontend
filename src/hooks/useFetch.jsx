import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, refetchData: fetch };
};

export default useFetch;
