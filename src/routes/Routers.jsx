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
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import CollegeDetails from "../Pages/CllegeDetails/CollegeDetails";

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
            { path: '/signUp', element: <SignUp /> },
            { path: '/profile', element: <PrivateRoute><UpdateProfile /></PrivateRoute> },
            {
                path: '/details/:id',
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://college-booking-server-chi.vercel.app/details/${params.id}`)
            }
        ]

    },
]);

export default router