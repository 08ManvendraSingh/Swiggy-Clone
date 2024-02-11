import { useEffect, useState } from "react";

const useSupport = (query) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const data =
      query === ""
        ? await fetch(
            "https://www.swiggy.com/dapi/support/issues/partner-onboarding?"
          )
        : await fetch(
            "https://www.swiggy.com/dapi/support/issues/" + query + "?"
          );
    const json = await data.json();
    setData(json?.data);
    console.log(json?.data);
  };

  return data;
};

export default useSupport;
