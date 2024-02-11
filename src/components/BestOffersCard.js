import { BEST_OFFER_IMG_CDN } from "../utils/constant";

const BestOffersCard = ({ data }) => {
  return (
    <div className="w-[28rem]">
      <img className="w-full" src={BEST_OFFER_IMG_CDN + data?.imageId} alt="" />
    </div>
  );
};

export default BestOffersCard;
