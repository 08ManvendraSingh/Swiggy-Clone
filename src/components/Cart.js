import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CarouselCartItem from "./CarouselCartItem";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  console.log(cartItem);

  return (
    <div className="px-40 py-5 relative top-24 mb-24 bg-[#e9ecee] gap-4 flex justify-between">
      <div className="w-8/12">
        <div className="bg-white mb-5 p-10 flex justify-between">
          <div className="w-8/12 mr-5">
            <h3 className="text-[#282c3f] font-semibold text-xl">Account</h3>
            <p className="text-[#7e808c] font-normal text-base">
              To place your order now, log in to your existing account or sign
              up.
            </p>
            <div className="flex mt-9">
              <div className="text-[#60b246] text-center mr-5 border border-solid border-[#60b246] cursor-pointer py-2 px-9">
                <p className="text-xs">Have an account?</p>
                <h5 className="text-sm font-semibold">LOG IN</h5>
              </div>
              <div className="text-white bg-[#60b246] text-center cursor-pointer py-2 px-9">
                <p className="text-xs">New to swiggy</p>
                <h5 className="text-sm font-semibold">SIGN UP</h5>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white mb-5 p-10 text-[#93959f] font-semibold text-lg">
          Delivery address
        </div>
        <div className="bg-white mb-5 p-10 text-[#93959f] font-semibold text-lg">
          Payment
        </div>
      </div>
      {cartItem.length > 0 ? (
        <div className="w-4/12  bg-white">
          <div>
            <div className="max-h-[calc(100vh-270px)] overflow-y-auto px-7">
              {cartItem.map((x) =>
                x.card ? <CartItem data={x} /> : <CarouselCartItem data={x} />
              )}
              {/* {cartItem.map((x)=><CarouselCartItem data={x}/>)} */}
            </div>
            <div className="w-full flex justify-between z-10 px-7 py-4">
              <span>TO PAY</span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-4/12 text-center">
          <h3 className="text-3xl font-bold text-[#aaa] mb-8">Cart Empty</h3>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
