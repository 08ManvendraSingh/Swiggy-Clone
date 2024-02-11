import { WHAT_MIND_IMG_CDN } from "../utils/constant";

const WhatMindCard = ({ data }) => {
  return (
    <div className="w-[150px]">
      <img
        className="w-[100%]"
        src={WHAT_MIND_IMG_CDN + data?.imageId}
        alt=""
      />
    </div>
  );
};

export default WhatMindCard;
