import { useParams } from "react-router-dom";
import useRestaurantInfo from "../hooks/useRestaurantInfo";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantOffers from "./RestaurantOffers";

const RestaurantData = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantInfo(resId);

  if (restaurantInfo.length === 0) return;

  const resInfo = restaurantInfo?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const resOffers = restaurantInfo?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
  );

  const resMenu = restaurantInfo?.filter(
    (x) => x?.groupedCard?.cardGroupMap?.REGULAR
  );

  return (
    <div>
      {resInfo && <RestaurantInfo data={resInfo} info={resMenu} />}
      {resOffers && <RestaurantOffers data={resOffers} />}
      <RestaurantMenu data={resMenu} />
    </div>
  );
};

export default RestaurantData;
