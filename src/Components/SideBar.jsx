import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa6";
import { IoIosDoneAll } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { RiCommunityLine } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { GrHelpBook } from "react-icons/gr";
import { TbUserCog } from "react-icons/tb";

function SideBar() {
    return (
        <>
            <div className="">
                <div className="">
                    <ul className="flex flex-col items-center border-b">
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <FaHome /> <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <FaBoltLightning /><span>Popular</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <FaWpexplorer /><span>Explore</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <IoIosDoneAll /><span>All</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col items-center border-b w-full">
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <RiCommunityLine /> <span>Communities</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <FcAdvertising /><span>Advertise</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/' className="flex items-center justify-center space-x-2 py-3 w-full hover:bg-slate-100 ">
                                <GrHelpBook /><span>Help</span>
                            </NavLink>
                        </li>
                        <li className="w-full text-center">
                            <NavLink to='/' className="flex justify-center items-center space-x-2 py-3 w-full hover:bg-slate-100">
                                <TbUserCog /><span>User Agreement</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar;
