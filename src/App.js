import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Search from "./components/Search";
import Home from "./components/Home";
import Help from "./components/Help";
import Restaurant from "./components/Restaurant";
import RestaurantData from "./components/RestaurantData";
import RestaurantSearch from "./components/RestaurantSearch";
import Cart from "./components/Cart";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
        children: [
          {
            path: "/restaurant/:resId",
            element: <RestaurantData />,
          },
          {
            path: "/restaurant/:resId/search",
            element: <RestaurantSearch />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
