import { useState } from "react";
import MenuCards from "./MenuCards";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MenuList = ({ data }) => {
  const { title, itemCards } = data?.card?.card;
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className=" mt-6 mr-2 mb-4 ml-4">
        <button
          onClick={() => setShow(!show)}
          className="w-full flex justify-between pr-4 border-0 cursor-pointer bg-transparent mb-6 text-lg"
        >
          <h3 className="h-5 transition-all text-[#3e4152] font-bold">
            {title} ({itemCards.length})
          </h3>
          <span>{show ? <BsChevronUp /> : <BsChevronDown />}</span>
        </button>
        {show && (
          <div className="itemList_accordian_dropdown">
            {itemCards.map((x) => (
              <MenuCards key={x?.card?.info?.id} data={x} />
            ))}
          </div>
        )}
      </div>
      <div className="border-b-[16px] border-[#f1f1f6]"></div>
    </div>
  );
};

export default MenuList;
