import { BsArrowLeft } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCards from "./MenuCards";

const RestaurantSearch = () => {
  const [search, setSearch] = useState("");
  const { state } = useLocation();
  const [filteredMenu, setFilteredMenu] = useState([]);

  const menuList =
    state[1][0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) =>
        x?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  useEffect(() => {
    filterData(search, state[1]);
  }, [search]);

  const filterData = (search, list) => {
    const filterData = menuList.map((x) =>
      x?.card?.card?.itemCards.filter((a) =>
        a?.card?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
      )
    );
    if (search == "") filterData = [];
    console.log(filterData);
  };

  return (
    <div className="w-full pt-6">
      <div className="h-12 mb-4 flex w-full items-center border-b border-b-[#282c3f33]">
        <Link to={"/restaurant/" + state[0][0]?.card?.card?.info?.id}>
          <BsArrowLeft className="w-6 h-8 fill-[#3d4152]" />
        </Link>
        <input
          className="w-full outline-none px-5 font-light py-2 bg-white border-none h-full"
          type="text"
          placeholder={`Search in ${state[0][0]?.card?.card?.info?.name}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="cursor-pointer border-white bg-white px-8">
          <BiSearch className="text-xl text-[#686b78]" />
        </button>
      </div>
      <div>
        {filteredMenu?.map((item, idx) => {
          return <MenuCards data={item} restInfo={state[1]} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantSearch;
