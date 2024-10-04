import Navbar from "../Components/Navbar"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
function MainlayOut() {
  return (
    <>
    <Toaster/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainlayOut