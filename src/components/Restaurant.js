import { Outlet } from "react-router-dom";

const Restaurant = () => {
  return (
    <div className="w-full min-h-[800px] relative top-[4.5rem] px-44">
      <Outlet />
    </div>
  );
};

export default Restaurant;
