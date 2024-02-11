import { useEffect, useState } from "react";

const useRestaurantInfo = (resId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setData(json?.data?.cards);
    console.log(json?.data?.cards);
  };

  return data;
};

export default useRestaurantInfo;
