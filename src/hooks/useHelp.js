import { useEffect, useState } from "react";

const useHelp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support?");
    const json = await data.json();
    setData(json?.data);
    console.log(json?.data);
  };

  return data;
};

export default useHelp;
