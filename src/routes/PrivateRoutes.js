import Loadable from "react-loadable";
import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ROUTE_DEFINATION } from "../utils/constants/route.constant";

const Store = Loadable({
  loader: () => import("../component/pages/Store"),
  loading: () => <h1>Loading...</h1>,
});

const Orders = Loadable({
  loader: () => import("../component/pages/Orders"),
  loading: () => <h1>Loading...</h1>,
});

const Cart = Loadable({
  loader: () => import("../component/pages/Cart"),
  loading: () => <h1>Loading...</h1>,
});

const PizzaCart = Loadable({
  loader: () => import("../component/pages/Cart/cart"),
  loading: () => <h1>Loading...</h1>,
});

const PrivateRoutes = {
  // path:ROUTE_DEFINATION.BASE,
  element: <MainLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <Store />,
    },
    {
      path: ROUTE_DEFINATION.ORDERS,
      title: ROUTE_DEFINATION.ORDERS,
      element: <Orders />,
    },
    {
      path: ROUTE_DEFINATION.CART,
      title: ROUTE_DEFINATION.CART,
      element: <PizzaCart />,
    },
    {
      path: "*",
      element: <Navigate to={ROUTE_DEFINATION.BASE} />,
    },
  ],
};

export default PrivateRoutes;
