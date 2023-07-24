import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/Logo/Untitled-removebg-preview.png'
import { AuthContext } from "../../Providers/AuthProvaider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [open, setOpen] = useState(false)
    const { user, LogOut } = useContext(AuthContext)


    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('User Log Out Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const menuItems =
        <div className="md:flex gap-5 items-center text-[16px] font-medium">

            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"} > Home </NavLink>
            </li>

            <li>
                <NavLink to="/colleges" className={({ isActive }) => isActive ? "active" : "default"}>Colleges </NavLink>
            </li>
            <li>
                <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : "default"}>Admission </NavLink>
            </li>

            <li>
                <NavLink to="/myCollege" className={({ isActive }) => isActive ? "active" : "default"}>   My College</NavLink>
            </li>

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full online">
                        <img className="online" src={user?.photoURL} />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to='/profile' className="justify-between">
                            Profile
                            <span className="badge text-xs font-serif">{user?.displayName}</span>
                        </Link>
                    </li>
                    {
                        user ? <li onClick={handleLogOut}><a>Logout</a></li>
                            : <li>  <a href="/login">Log In</a></li>
                    }
                </ul>
            </div>

        </div>


    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <>
            <ToastContainer />
            <nav className={`fixed w-full left-0 top-0 bg-base-200 z-[999] ${sticky ? ' bg-white/60 ' : 'text-white'}`}>
                <div className="flex justify-between items-center">
                    <div className="mx-7 flex items-center gap-2">
                        <img className="w-16 h-15 animate-bounce" src={logo} alt="" />
                        <h1 className="md:text-3xl text-1xl font-bold text-black animate-pulse">EduBookings</h1>
                    </div>
                    <div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-blue-50'} md:block px-7 hidden text-gray-900 font-medium py-2 rounded-bl-full`}>
                        <ul className="flex items-center gap-1 py-2 text-lg">
                            {menuItems}
                        </ul>
                    </div>
                    <div onClick={() => setOpen(!open)} className={`z-[999] md:hidden ${open ? 'text-gray-900' : 'text-black'} m-5 text-3xl`}>
                        <FiMenu />
                    </div>
                    <div className={`md:hidden absolute duration-700 text-white bg-slate-400  w-full text-center font-bold  px-7 py-2 top-0 ${open ? 'right-0 ' : 'right-[-100%]'}`}>
                        <ul className="flex flex-col gap-10 py-2 justify-center text-lg font-bold">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;