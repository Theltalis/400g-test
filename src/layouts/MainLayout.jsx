import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-200">
        <Outlet />
        <ToastContainer />
      </div>
    </>
  )
}

export default MainLayout