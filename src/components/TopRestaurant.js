import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TopRestaurantCard from "./TopRestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurant = ({ data }) => {
  return (
    <div className="pt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-[#02060ceb]">
          {data[0]?.card?.card?.header?.title}
        </h2>
        <div className="flex gap-2">
          <span className="cursor-pointer rounded-full p-2 bg-slate-200">
            <BsArrowLeft />
          </span>
          <span className="cursor-pointer rounded-full p-2 bg-slate-200">
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className="flex gap-4 overflow-y-scroll no-scrollbar">
        {data[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (x) => (
            <Link to={"/restaurant/" + x?.info?.id}>
              <TopRestaurantCard key={x?.info?.id} data={x} />
            </Link>
          )
        )}
      </div>
      <hr className="w-full bg-slate-400 mt-12" />
    </div>
  );
};

export default TopRestaurant;
