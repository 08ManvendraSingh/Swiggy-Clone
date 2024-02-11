import React, { useState } from "react";
import BestPlacesCard from "./BestPlacesCard";
import { Link } from "react-router-dom";

const BestPlaces = ({ data }) => {
  const [Show, setShow] = useState(false);
  return (
    <div className="pt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-[#02060ceb]">
          {data[0]?.card?.card?.title}
        </h2>
      </div>
      {!Show ? (
        <div className="flex flex-wrap">
          {data[0]?.card?.card?.brands?.slice(0, 11)?.map((x) => (
            <Link className="best-flex mx-4 mb-4 ">
              <BestPlacesCard key={x?.text} data={x} />
            </Link>
          ))}
          <div
            onClick={() => setShow(true)}
            className="best-flex mx-4 mb-4 cursor-pointer"
          >
            <div className="w-full overflow-ellipsis break-words p-4 rounded-xl border-[1.5px] border-[#02060c1a] text-center text-base font-medium">
              Show More
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {data[0]?.card?.card?.brands?.map((x) => (
            <Link className="best-flex mx-4 mb-4 ">
              <BestPlacesCard key={x?.text} data={x} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestPlaces;
