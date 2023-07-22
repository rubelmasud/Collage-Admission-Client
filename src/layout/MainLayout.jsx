import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default MainLayout;