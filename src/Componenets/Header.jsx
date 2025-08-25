import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { toLogout } from "../feature/event/eventSlice";

const Header = () => {
    const { pathname } = useLocation();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.reducer.isLoggedIn);


    const handleClick = () => {
        dispatch(toLogout());
        navigate("/login");
        toast.success("Logout successfully.....");
    };



    return (
        <>
            <header className='shadow-sm fixed top-0 left-0 w-full z-50'>
                <div className='container mx-auto'>
                    <nav className="border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <img src="/img/logo.png" alt="logo" />
                            {/* <img src="/img/0.site-logo.png" alt="logo" /> */}

                            <div className={`flex w-full md:block md:w-auto ${menu ? "block" : "hidden"} md:flex`} id="navbar-default">
                                <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                    <li>
                                        <Link to={"/"} className={`${pathname == "/" ? "text-[#73B458]" : "text-white"}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/services"} className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-orange-300 md:p-0 ">
                                            Services
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-300 md:p-0 ">
                                            Contact
                                        </Link>
                                    </li>
                                    {isLoggedIn && (
                                        <Link
                                            to={"/events"}
                                            className={`${pathname == "/events" || pathname == "/add-event" || pathname.includes("/edit-event") ? "text-[#b4a558]" : "text-white"}`}
                                        >
                                            Events
                                        </Link>
                                    )}

                                </ul>
                            </div>

                            <div className="flex items-center gap-2">
                                {
                                    isLoggedIn ? <button onClick={handleClick} type="button" className="login-btn md:flex hidden items-center gap-4 bg-[#b0804c] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300">
                                        Logout
                                        <i className="ri-user-3-fill text-white"></i>
                                    </button> :
                                        <button onClick={() => {
                                            navigate("/login")
                                        }} type="button" className="login-btn flex items-center gap-4 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300">
                                            Login
                                            <i className="ri-user-3-fill text-white"></i>
                                            
                                        </button>
                                }
                                <div className="md:hidden">
                                    <button onClick={() => setMenu(!menu)} className="text-white text-2xl">
                                        {menu ? '✕' : '☰'}
                                    </button>
                                </div>
                            </div>

                            {/* <div className='text-orange-500 block rounded-full border'>
                                <button className='text-xl login-btn'>
                                    <i className="ri-user-3-fill text-white"></i>
                                </button>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
