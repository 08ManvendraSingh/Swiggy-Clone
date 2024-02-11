import { Link } from "react-router-dom";
import OnlineRestaurantCard from "./OnlineRestaurantCard";

const OnlineRestaurant = ({ data }) => {
  return (
    <div className="pt-8">
      <div
        className="w-full grid justify-center justify-items-center grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
    overflow-x-hidden"
      >
        {data[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (x) => (
            <Link to={"/restaurant/" + x?.info?.id}>
              <OnlineRestaurantCard key={x?.info?.id} data={x} />
            </Link>
          )
        )}
      </div>
      <hr className="w-full bg-slate-400 mt-12" />
    </div>
  );
};

export default OnlineRestaurant;
