import Navbar from "../Components/Navbar"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import CartZustand from "../Practice/CartZustand"
import Footer from "../Components/Footer"
function MainlayOut() {
  return (
    <>
    <Toaster/>
    <Navbar/>
    {/* <CartZustand/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainlayOut