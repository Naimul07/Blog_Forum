import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
// import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
function MainlayOut() {
  
  return (
    <>
     <Toaster position="top-right"
  reverseOrder={false}/>
{/* <ToastContainer/> */}
      <Navbar />
      {/* <CartZustand/> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainlayOut