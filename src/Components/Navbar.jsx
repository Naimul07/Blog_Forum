import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="py-4 px-4 sm:px-0 fixed top-0 w-full border-b bg-white">
        <nav className="container mx-auto flex justify-between gap-4 ">
          <div>
            <h1>BlogForum</h1>
          </div>
          <ul className="flex gap-6">
            <li className="hidden sm:block">
              <input type="text" className="border rounded-md border-black" />
            </li>
            <li>
            <IoMdNotificationsOutline size={24}/>
            </li>
            <li>
            <Link to='/post/create'><IoMdAdd size={24}/></Link>
            </li>
            <li>
              user
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar