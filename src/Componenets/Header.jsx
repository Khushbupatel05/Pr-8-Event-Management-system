import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toLogout } from "../feature/event/eventSlice";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.reducer.isLoggedIn);
    const isHome = pathname === "/";

    const handleClick = () => {
        dispatch(toLogout());
        navigate("/login");
        toast.success("Logout successfully!");
    };

    return (
        <header className={`${isHome ? " m-0 bg-transparent" : "bg-white shadow-md"} fixed w-full z-50`}>
            <nav className="container mx-auto">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={isHome ? "/img/logo.png" : "/img/0.site-logo.png"} className="max-[354px]:w-24 h-auto" alt="logo" />
                    </Link>


                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link to={"/"} className={`${pathname === "/" ? "text-[#b58441]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={`${pathname === "/services" ? "text-[#b58441]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>About Us</Link>
                            </li>

                            <li>
                                <Link to={"/services"} className={`${pathname === "/services" ? "text-[#b58441]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>Services</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname === "/contact" ? "text-[#b58441]text-[#73B458]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>Contact</Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link to={"/events"} className={`${pathname === "/events" || pathname.includes("/edit-events") ? "text-[#b58441]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>Events</Link>
                                </li>
                            )}
                        </ul>
                    </div>


                    <div className="flex items-center gap-2">
                        {
                            isLoggedIn ? <button onClick={handleClick} type="button" className="md:flex hidden items-center gap-2 bg-[#b0804c] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300 shadow-md">
                                Logout
                                
                            </button> :
                                <button onClick={() => {
                                    navigate("/login")
                                }} type="button" className="flex items-center gap-2  border-spacing-3 bg-orange-400 hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300 shadow-md">
                                    Login
                                    <i className="ri-user-3-fill text-white"></i>

                                </button>
                        }


                        <div className="md:hidden">
                            <button onClick={() => setMenu(!menu)} className={`${isHome ? "text-white" : "text-black"} text-2xl`}>
                                {menu ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {menu && (
                <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-neutral-950/95 z-50 p-6 overflow-y-auto">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center justify-between">
                            <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src={isHome ? "/img/logo.png" : "/img/0.site-logo.png"} className="max-[354px]:w-24 h-auto" alt="logo" />
                            </Link>
                            <button onClick={() => setMenu(false)} className="text-white text-2xl">✕</button>
                        </div>

                        <ul className="flex flex-col space-y-4 font-semibold mt-6">
                            <li>
                                <Link onClick={() => setMenu(false)} to={"/"} className={`${pathname === "/" ? "text-[#b58441]" : "text-white"} hover:text-[#F29727] transition-colors duration-300`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={`${pathname === "/services" ? "text-[#b58441]" : isHome ? "text-white" : "text-black"} hover:text-[#F29727] transition-colors duration-300`}>About Us</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenu(false)} to={"/services"} className={`${pathname === "/services" ? "text-[#b58441]" : "text-white"} hover:text-[#F29727] transition-colors duration-300`}>Services</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenu(false)} to={"/contact"} className={`${pathname === "/contact" ? "text-[#b58441]" : "text-white"} hover:text-[#F29727] transition-colors duration-300`}>Contact</Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link onClick={() => setMenu(false)} to={"/events"} className={`${pathname === "/events" || pathname.includes("/edit-events") ? "text-[#b58441]" : "text-white"} hover:text-[#F29727] transition-colors duration-300`}>Events</Link>
                                </li>
                            )}
                        </ul>


                        <div className="mt-6">
                            {
                                isLoggedIn ? <button onClick={handleClick} type="button" className="md:flex hidden items-center gap-2 bg-[#b0804c] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300 shadow-md">
                                    Logout
                                    <i className="ri-logout-box-r-line text-white"></i>
                                </button> :
                                    <button onClick={() => {
                                        navigate("/login")
                                    }} type="button" className="flex items-center gap-2 bg-[#b4b258] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300 shadow-md">
                                        Login
                                        <i className="ri-user-3-fill text-white"></i>

                                    </button>
                            }
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
