import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-4 px-6 sm:px-0 fixed top-0 w-full border-b bg-white shadow-sm z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">BlogForum</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            />
          </div>
          <Link to="/notifications" className="relative flex items-center">
            <IoMdNotificationsOutline size={24} className="text-gray-700 hover:text-blue-600 transition duration-200" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </Link>
          <Link to="/post/create" className="flex items-center">
            <IoMdAdd size={24} className="text-gray-700 hover:text-blue-600 transition duration-200" />
          </Link>
          <div className="hidden sm:flex items-center bg-gray-200 rounded-full px-3 py-1 text-gray-700 font-medium hover:bg-gray-300 cursor-pointer transition duration-200">
            user
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
