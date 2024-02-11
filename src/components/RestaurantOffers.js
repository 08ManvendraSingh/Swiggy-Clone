import React from "react";
import ResOffersCard from "./ResOffersCard";

const RestaurantOffers = ({ data }) => {
  const { offers } = data[0]?.card?.card?.gridElements?.infoWithStyle;
  return (
    <div className="flex items-center overflow-x-scroll pb-4 mb-2 no-scrollbar">
      {offers &&
        offers.map((x) => (
          <ResOffersCard key={x?.info?.offerIds[0]} data={x} />
        ))}
    </div>
  );
};

export default RestaurantOffers;
