import React from "react"
import { Link, Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import customFetch from "../../utils/customFetch"
import { toast } from 'react-toastify';

import { 
  HiChartBar,
  HiUserCircle,
  HiDocumentAdd,
  HiFolderOpen,
} from "react-icons/hi"

export const loader = async () => {
  try {
    const { data } = await customFetch.get("users/current-user")
    return data
  } catch (error) {
    return redirect("/")
  }
}

import avatarImg from "../assets/images/avatar-1.jpg"
import Navbar from "../../components/Navbar";

import Sidebar from "../../components/Sidebar.jsx"



const DashboardLayout = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()

  const logoutUser = async () => {
    navigate("/")
    await customFetch.get("/auth/logout")
    toast.success("Logging out...")
  }

  
  let sidebarNavItems = [
    {
      text:"Add Product",
      path:"",
      icon:<HiDocumentAdd/>,
    },
    {
      text:"All Products",
      path:"allProducts",
      icon:<HiFolderOpen/>,
    },
    {
      text:"Stats",
      path:"stats",
      icon:<HiChartBar/>,
    },
    {
      text:"Profile",
      path:"profile",
      icon:<HiUserCircle/>,
    },
  ]

  return (
    <div className="grid grid-rows-[100px_minmax(800px,_1fr)] h-screen">
      <Navbar user={user} logoutUser={logoutUser} sidebarNavItems={sidebarNavItems}/>
      <div className="flex flex-row">
        <Sidebar sidebarNavItems={sidebarNavItems}/>         
        <main className="bg-gray-100 w-full p-4">
          <Outlet context={{ user }}/>
        </main>
      </div>
    </div>
  )

}

export default DashboardLayout