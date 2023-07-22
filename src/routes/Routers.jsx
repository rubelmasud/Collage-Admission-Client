import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import My_Collage from "../Pages/My Collages/My_Collage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/colleges', element: <Collages /> },
            { path: '/admission', element: <Admission /> },
            { path: '/myCollege', element: <PrivateRoute><My_Collage /></PrivateRoute> },
            { path: '/login', element: <Login /> },
            { path: '/signUp', element: <SignUp /> }
        ]

    },
]);

export default router