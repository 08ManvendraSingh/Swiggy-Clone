import React from "react";
import FilterBtn from "./FilterBtn";

const FilterBadges = ({ data }) => {
  const filterButton = data[0]?.card?.card?.facetList?.filter(
    (x) => x?.openFilter !== true
  );

  return (
    <div className="w-full h-11 px-2 flex gap-2 mt-6 mx-auto overflow-x-auto no-scrollbar">
      {filterButton.map(
        (x) =>
          !x.openFilter &&
          x.facetInfo.map((x) => x.openFilter && <FilterBtn data={x} />)
      )}
    </div>
  );
};

export default FilterBadges;
