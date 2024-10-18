import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
function Navbar() {
  return (
    <>
      <div className="py-3 fixed top-0 w-full border-b">
        <nav className="container mx-auto flex justify-between gap-4 ">
          <div>
            <h1>BlogForum</h1>
          </div>
          <ul className="flex gap-6">
            <li>
              <input type="text" className="border rounded-md border-black" />
            </li>
            <li>
            <IoMdNotificationsOutline size={24}/>
            </li>
            <li>
            <IoMdAdd size={24}/>
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