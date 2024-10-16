import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage.jsx'
import MainlayOut from './Layout/MainlayOut.jsx'
import HomePage from './Pages/HomePage.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import EmailVerify from './Pages/EmailVerify.jsx'
import ResetPassword from './Pages/ResetPassword.jsx'
import ForgetPassResent from './Components/ForgetPassResent.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainlayOut/> ,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/email_verification",
        element:<EmailVerify/>
      },
      {
        path:"/password/reset",
        element:<ResetPassword/>
      },
      {
        path:"/password/resetEmail",
        element:<ForgetPassResent/>
      }
    ]
  },
  /* {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  } */
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
