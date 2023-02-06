import Loadable from "react-loadable";
import { Navigate } from "react-router-dom";
import SignUpLayout from "../layout/SignUpLayout";
import { ROUTE_DEFINATION } from "../utils/constants/route.constant";

const Login =Loadable({ loader: () => import("../component/pages/Login"),
loading: () => <h1>Loading...</h1>,
})

const SignUp=Loadable({ loader: () => import("../component/pages/SignUp"),
loading: () => <h1>Loading...</h1>
})

const PublicRoutes = {
element:<SignUpLayout/>,
children:[
    {
        path:ROUTE_DEFINATION.BASE,
        element:<SignUp/>
    },
    {
        path:ROUTE_DEFINATION.LOGIN,
        element:<Login/>
    },
    {
        path:"*",
        element:<Navigate to={ROUTE_DEFINATION.BASE}/>
    }
]
}

export default PublicRoutes;