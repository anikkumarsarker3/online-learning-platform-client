import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import OtherProfile from '../assets/OtherPhoto.jpg'
import Swal from "sweetalert2";
import Logo from '../assets/technicLogo.png'
import Loader from "../Pages/Loader";
// import DashNav from "./DashNav";
const Navbar = () => {
    const [showDashboardMenu, setShowDashboardMenu] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    const { user, loading, logoutUser, setUser } = use(AuthContext)
    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    if (loading) {
        // return <Loader></Loader>
    }
    const handleTheme = (checked) => {
        checked ? setTheme('dark') : setTheme('light')
    }
    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                setUser(null);
                Swal.fire({
                    title: "Logout successfull",
                    icon: "success",
                    draggable: true
                });
                navigate('/');
            })
            .catch(() => {
                Swal.fire({
                    icon: "Logout Fail",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })

    }

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>
            Home
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>
            Courses
        </NavLink>

        {
            user ? <div
                className="relative"
                onMouseEnter={() => setShowDashboardMenu(true)}
                onMouseLeave={() => setShowDashboardMenu(false)}
            >
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600 cursor-pointer"
                    }
                >
                    Dashboard ▾
                </NavLink>

                <AnimatePresence>
                    {showDashboardMenu && (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 mt-3 bg-white text-blue-900 rounded-xl shadow-lg overflow-hidden w-48 z-50"
                        >
                            <NavLink
                                to="/dashboard/profile" className={({ isActive }) => isActive ? "text-blue-600 block px-4 py-3 " : "text-gray-700 hover:text-blue-600 block hover:bg-blue-100 transition  px-4 py-3 "}
                            // className="block px-4 py-3 hover:bg-blue-100 transition"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to="/dashboard/my-enroll"
                                className={({ isActive }) => isActive ? "text-blue-600 block px-4 py-3 " : "text-gray-700 hover:text-blue-600 block hover:bg-blue-100 transition  px-4 py-3 "}
                            >
                                My enrolled course
                            </NavLink>
                            <NavLink
                                to="/dashboard/add-course"
                                className={({ isActive }) => isActive ? "text-blue-600 block px-4 py-3 " : "text-gray-700 hover:text-blue-600 block hover:bg-blue-100 transition  px-4 py-3 "}
                            >
                                Add course
                            </NavLink>
                            <NavLink
                                to="/dashboard/my-course"
                                className={({ isActive }) => isActive ? "text-blue-600 block px-4 py-3 " : "text-gray-700 hover:text-blue-600 block hover:bg-blue-100 transition  px-4 py-3 "}
                            >
                                My course
                            </NavLink>


                        </motion.div>
                    )}
                </AnimatePresence>
            </div> : ''
        }


        <div onClick={() => navigate('/dashboard/profile')} className="cursor-pointer hidden md:block">
            {
                user &&
                <img src={user?.photoURL}
                    onError={(e) => (e.target.src = OtherProfile)} alt="" className="w-10 rounded-full" />

            }
        </div>


        {
            user ? <NavLink onClick={handleLogOut} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Logout
            </NavLink> : <NavLink to='/login' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" >
                Login
            </NavLink>
        }

        <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem('theme') === 'dark'}
            className="toggle"
        />
    </>


    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-3">
                    <img src={Logo} alt="" className="w-12 rounded-full" />
                    Technic Academy
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    {links}
                </div>
                {
                    showMenu ? <div className="bg-white shadow-md top-20 left-2/3 absolute flex flex-col gap-6 md:hidden p-3 text-center rounded-lg items-center duration-1000">
                        {links}
                    </div> : <div className="bg-white shadow-md top-20 left-6/4 absolute flex flex-col gap-6 md:hidden p-3 text-center rounded-lg items-center ">
                        {links}
                    </div>
                }

                <div className="md:hidden flex gap-6 items-center">
                    <div onClick={() => setShowMenu(!showMenu)}>
                        {
                            showMenu ? <RxCross1 /> : <MdMenu />
                        }
                    </div>
                    <div onClick={() => navigate('/dashboard/profile')} className="cursor-pointer">
                        {
                            user &&
                            <img src={user?.photoURL}
                                onError={(e) => (e.target.src = OtherProfile)} alt="" className="w-10 rounded-full" />

                        }
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;