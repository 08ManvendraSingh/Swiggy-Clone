import { RESTAURANT_CAROUSEL_ING_CDN } from "../utils/constant";

const MenuCarouselCard = ({ data }) => {
  const { creativeId, dish } = data;
  const { price, defaultPrice } = dish?.info;

  return (
    <div className="w-full relative mr-12">
      <div className="w-96">
        <img
          className="w-full"
          src={RESTAURANT_CAROUSEL_ING_CDN + creativeId}
          alt=""
        />
      </div>
      <div className="w-full px-4 absolute bottom-4 text-white flex justify-between items-center">
        {price ? (
          <span>₹{price / 100}</span>
        ) : (
          <span>₹{defaultPrice / 100}</span>
        )}
        <button className="w-[96px] h-[36px] bg-white rounded-md text-[#60b246] cursor-pointer text-center">
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuCarouselCard;
