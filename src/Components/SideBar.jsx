import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa";

function SideBar() {
    return (
        <>
            <div className="">
                <div className="">
                    <ul className="flex flex-col items-center border-b">
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3"><FaHome /> <span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3">Popular</NavLink>

                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3">Explore</NavLink>

                        </li>

                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3">All</NavLink>

                        </li>

                    </ul>

                </div>
                <div>
                    <ul className="flex flex-col items-center border-b">
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3"> <span>Communities</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3"><span>Advertise</span></NavLink>

                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3"><span>Help</span></NavLink>

                        </li>

                        <li>
                            <NavLink to='/' className="flex items-center space-x-2 p-3"><span>User Agreement</span></NavLink>

                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar