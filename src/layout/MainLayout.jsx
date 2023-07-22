import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";

const MainLayout = () => {
    return (
        <div className="md:px-12">
            <Navbar />
            <div className="md:mt-20 mt-[72px]">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;