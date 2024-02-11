import { SiSwiggy } from "react-icons/si";
import { navItems } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header fixed z-40 w-full py-3 px-36 bg-white shadow-md flex justify-between items-center">
      <div className="logo w-2/12">
        <Link to={"/"}>
          <SiSwiggy className="text-[#ffa700] text-5xl cursor-pointer" />
        </Link>
      </div>
      <div className="nav w-6/12 flex justify-between">
        {navItems.map((x, i) => {
          return (
            <Link to={"/" + x.name.toLowerCase()}>
              <div
                key={i}
                className="flex justify-between items-center text-[#3d4152] cursor-pointer hover:text-[#ffa700] transition-all"
              >
                <span className="text-lg font-bold mr-2">{x?.icon}</span>
                <span className="text-base font-medium">{x?.name}</span>
              </div>
            </Link>
          );
        })}
        <Link to="/cart">
          <div className="flex justify-between items-center text-[#3d4152] cursor-pointer hover:text-[#ffa700] transition-all">
            <span className="text-lg font-bold mr-2">
              <IoCartOutline />
            </span>
            <span className="text-base font-medium">
              Cart({cartItems.length})
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
