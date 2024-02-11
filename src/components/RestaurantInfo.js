import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { RESTAURANT_INFO_ING_CDN } from "../utils/constant";

const RestaurantInfo = ({ data, info }) => {
  const {
    city,
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    expectationNotifiers,
    id,
  } = data[0]?.card?.card?.info;

  return (
    <div className="pt-6">
      <div className="Breadcrumbs flex h-10 items-center justify-between mb-4 text-[9.5px] text-[#93959f]">
        <div className="flex items-center">
          <span className="text-[#7e808c] text-xs">
            <Link to={"/"}>Home</Link>
          </span>
          <span className="text-[#7e808c] text-xs">{" / " + city}</span>
          <span className="text-[#282c3f] text-xs">{" / " + name}</span>
        </div>
        <div className="cursor-pointer">
          <MdSearch className="mr-4 h-7 w-7 fill-[#3d4152]  font-bold" />
        </div>
      </div>
      <div className="w-full mb-4 flex justify-between items-center">
        <div className="">
          <h2 className="text-[#282c3f] mb-2 capitalize text-xl font-bold">
            {name}
          </h2>
          <p className="text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">
            {cuisines.join(", ")}
          </p>
          <p className="text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">
            {areaName}, {sla?.lastMileTravelString}
          </p>
        </div>
        <div className="border border-[#e9e9eb] rounded-md text-center p-2 max-w-[100px] shadow">
          <h4 className="text-[#3d9b6d] pb-2 border-b border-b-[#e9e9eb] mb-2 font-bold flex items-center justify-center">
            <FaStar className="mr-1" /> {avgRating}
          </h4>
          <h5 className="text-[#8b8d97] font-bold text-xs">
            {totalRatingsString}
          </h5>
        </div>
      </div>
      <div className="mb-4">
        {expectationNotifiers && (
          <div className="text-[#7e808c] flex items-center mb-4 text-sm font-medium">
            <img
              className="mr-3"
              src={
                RESTAURANT_INFO_ING_CDN + expectationNotifiers[0]?.icon?.imageId
              }
              alt=""
            />{" "}
            {expectationNotifiers[0]?.text}
          </div>
        )}
        <hr className="border-0 border-b border-dashed border-b-[#d3d3d3] mb-4" />
        <div className="mb-4 text-[#3e4152] flex items-center text-base font-bold">
          <div className="mr-6">🕖 {sla?.deliveryTime} MINS</div>
          <div className="flex items-center">
            <HiOutlineCurrencyRupee className="mr-2 text-xl" />{" "}
            {costForTwoMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
