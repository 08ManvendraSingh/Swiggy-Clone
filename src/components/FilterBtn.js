import React from "react";

const FilterBtn = ({ data }) => {
  return (
    <div className="cursor-pointer whitespace-nowrap text-[#02060cbf] border border-[#e2e2e7] py-2 px-3 rounded-3xl">
      {data?.label}
    </div>
  );
};

export default FilterBtn;
