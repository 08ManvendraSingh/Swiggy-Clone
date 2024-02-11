import MenuCarouselCard from "./MenuCarouselCard";
import MenuList from "./MenuList";

const RestaurantMenu = ({ data }) => {
  const vegFilter = data[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
  );

  const menuCarousel =
    data[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) =>
        x?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    );

  const menuList = data[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(menuList);
  return (
    <div>
      <div className="vegBtn">
        {vegFilter[0] &&
          (!vegFilter[0]?.card?.card?.isPureVeg === true ? (
            <div className="mt-6 mx-4 h-3 flex items-center translate-z">
              <div className="text-[#3d4152] font-bold text-base">Veg Only</div>
              <button className="ml-3 h-4 border-0 cursor-pointer bg-[#d4d5d9] w-9 relative rounded inline-block translate-z transition-c will">
                <span className="absolute top-0 left-0 w-4 bg-[#fff] border-2 border-[#d4d5d9] h-4 rounded transition-all"></span>
              </button>
            </div>
          ) : (
            <div className="mt-6 mx-4 h-3 flex items-center translate-z">
              <img
                className="mr-3"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/" +
                  vegFilter[0]?.card?.card?.vegOnlyDetails?.imageId
                }
                alt=""
              />
              <span className="text-[#535665] text-xs">PURE VEG</span>
            </div>
          ))}
        <hr className="border-b-[.5px] h-[.5px] my-6 mx-auto border-[#d3d3d3]" />
      </div>
      {menuCarousel[0] && (
        <div className="menuCarousel">
          <h3 className="text-[#282c3f] font-bold text-xl mb-4">
            {menuCarousel[0]?.card?.card?.title}
          </h3>
          <div className="flex overflow-x-scroll no-scrollbar">
            {menuCarousel[0].card.card.carousel?.map((x) => (
              <MenuCarouselCard key={x?.dish?.info?.id} data={x} />
            ))}
          </div>
        </div>
      )}
      {menuList && menuList.map((x) => <MenuList data={x} />)}
    </div>
  );
};

export default RestaurantMenu;
