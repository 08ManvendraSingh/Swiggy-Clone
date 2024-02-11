import useSwiggyData from "../hooks/useSwiggyData";
import BestOffers from "./BestOffers";
import BestPlaces from "./BestPlaces";
import FilterBadges from "./FilterBadges";
import OnlineRestaurant from "./OnlineRestaurant";
import TopRestaurant from "./TopRestaurant";
import WhatMind from "./WhatMind";

const Home = () => {
  const swiggyData = useSwiggyData();

  const bestOffers = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.id === "topical_banner"
  );

  const whatMind = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.id === "whats_on_your_mind"
  );

  const topRestaurantChain = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.id === "top_brands_for_you"
  );

  const onlineRestaurantTitle = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.id === "popular_restaurants_title"
  );

  const filterBadges = swiggyData?.cards?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget"
  );

  const onlineRestaurant = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.id === "restaurant_grid_listing"
  );

  const bestPlaces = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.title === "Best Places to Eat Across Cities"
  );

  const bestCuisiens = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.title === "Best Cuisines Near Me"
  );

  const restaurantNearMe = swiggyData?.cards?.filter(
    (x) => x?.card?.card?.title === "Explore Every Restaurants Near Me"
  );

  return (
    <div className=" lg:px-40 md:px-20 px-10 relative top-24 mb-28">
      {bestOffers && <BestOffers data={bestOffers} />}
      {whatMind && <WhatMind data={whatMind} />}
      {topRestaurantChain && <TopRestaurant data={topRestaurantChain} />}
      {onlineRestaurantTitle && (
        <div className="pt-8">
          <h2 className="font-bold text-2xl text-[#02060ceb]">
            {onlineRestaurantTitle[0]?.card?.card?.title}
          </h2>
        </div>
      )}
      {filterBadges && <FilterBadges data={filterBadges} />}
      {onlineRestaurant && <OnlineRestaurant data={onlineRestaurant} />}
      {bestPlaces && <BestPlaces data={bestPlaces} />}
      {bestCuisiens && <BestPlaces data={bestCuisiens} />}
      {restaurantNearMe && <BestPlaces data={restaurantNearMe} />}
    </div>
  );
};

export default Home;
