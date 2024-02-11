import React from "react";

const BestPlacesCard = ({ data }) => {
  return (
    <div className="w-full overflow-ellipsis break-words p-4 rounded-xl border-[1.5px] border-[#02060c1a] text-center text-base font-medium">
      {data?.text}
    </div>
  );
};

export default BestPlacesCard;
