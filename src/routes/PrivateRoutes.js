import Loadable from "react-loadable";
import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ROUTE_DEFINATION } from "../utils/constants/route.constant";

const Home = Loadable({
  loader: () => import("../component/pages/Home"),
  loading: () => <h1>Loading...</h1>,
});

const PrivateRoutes = {
  // path:ROUTE_DEFINATION.BASE,
  element: <MainLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to={ROUTE_DEFINATION.BASE}/>,
    },
  ],
};

export default PrivateRoutes;
