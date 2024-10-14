import { Navigate,Outlet } from "react-router-dom"

function Protected() {
    const auth = localStorage.getItem('userToken')
  return auth ? <Outlet/> : <Navigate to= "/login"/>
}

export default Protected