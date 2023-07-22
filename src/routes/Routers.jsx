import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import My_Collage from "../Pages/My Collages/My_Collage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/colleges', element: <Collages /> },
            { path: '/admission', element: <Admission /> },
            { path: '/myCollege', element: <My_Collage /> }
        ]

    },
]);

export default router