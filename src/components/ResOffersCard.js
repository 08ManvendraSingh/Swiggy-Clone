import React from "react";
import { RESTAURANT_OFFERS_ING_CDN } from "../utils/constant";

const ResOffersCard = ({ data }) => {
  const { header, couponCode, description, offerLogo } = data?.info;
  return (
    <div className="mr-3 border border-[#e9e9eb] shadow-sm rounded-lg p-2 h-full min-w-[200px] my-1">
      <div className="flex items-center">
        <img
          className="w-5 h-5 mr-2"
          src={RESTAURANT_OFFERS_ING_CDN + offerLogo}
          alt=""
        />
        <p className="text-[#686b78] whitespace-nowrap font-bold text-sm">
          {header}
        </p>
      </div>
      <div className="text-[#93959f]  max-w-[200px] font-bold whitespace-nowrap overflow-hidden text-ellipsis mt-1 text-xs">
        {couponCode} | {description}
      </div>
    </div>
  );
};

export default ResOffersCard;
