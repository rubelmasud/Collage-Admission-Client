import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, Loading } = useContext(AuthContext)
    const location = useLocation()

    if (Loading) {
        return <div className='text-center py-[20%] h-screen items-center'><button className="btn btn-lg btn-square loading"></button></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;