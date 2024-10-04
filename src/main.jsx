import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage.jsx'
import MainlayOut from './Layout/MainlayOut.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainlayOut/> ,
    errorElement:<ErrorPage/>
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
