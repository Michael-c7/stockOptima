import React from "react"
import { Link, Outlet } from "react-router-dom"


import { 
  HiChartBar,
  HiUserCircle,
  HiDocumentAdd,
  HiFolderOpen,
} from "react-icons/hi"

import avatarImg from "../assets/images/avatar-1.jpg"
import Navbar from "../../components/Navbar";

import Sidebar from "../../components/Sidebar.jsx"


const DashboardLayout = () => {
  const user = {name: "Johnny"}

  const logoutUser = async () => {
    console.log("logout user")
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
          <Outlet/>
        </main>
      </div>
    </div>
  )

}

export default DashboardLayout