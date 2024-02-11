import { NON_VEG_CDN, VEG_IMG_CDN } from "../utils/constant";

const CarouselCartItem = ({ data }) => {
  const {
    name,
    price,
    defaultPrice,
    finalPrice,
    imageId,
    ribbon,
    description,
    itemAttribute,
  } = data?.dish?.info;

  return (
    <div className="w-full flex items-center py-2">
      <div className="w-full flex gap-1 items-center">
        <div className="flex items-center w-1/2">
          {itemAttribute.vegClassifier === "VEG" ? (
            <img className="w-3 h-3 mr-2" alt="veg_img" src={VEG_IMG_CDN} />
          ) : (
            <img className="w-5 h-5" alt="veg_img" src={NON_VEG_CDN} />
          )}
          <div className=" text-sm font-normal">{name}</div>
        </div>
        <div className=" w-1/2 ml-2 font-normal text-xs flex items-center">
          <div className="text-[#60b246] border border-solid border-[#d4d5d9] py-1">
            <span className="px-1 text-xl">-</span>
            <span className="px-1">1</span>
            <span className="px-1 text-xl">+</span>
          </div>
          {!defaultPrice ? (
            !finalPrice ? (
              <div className="text-[#535660] text-right w-14">
                ₹ {price / 100}
              </div>
            ) : (
              <div className="text-[#535660] text-right w-14">
                ₹{finalPrice / 100}
              </div>
            )
          ) : (
            <div className="text-[#535660] text-right w-14">
              ₹ {defaultPrice / 100}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCartItem;
