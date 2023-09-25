import React from "react"
import { Link, Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import customFetch from "../../utils/customFetch"
import { toast } from 'react-toastify';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar.jsx"

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


const DashboardContext = React.createContext();


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
  <DashboardContext.Provider
    value={{
      user,
      logoutUser,
    }}
  >
    <div className="grid grid-rows-[auto_minmax(400px,_1fr)] min-h-screen">
      <Navbar user={user} logoutUser={logoutUser} sidebarNavItems={sidebarNavItems}/>
      <div className="grid sm:grid-cols-[auto_minmax(800px,_1fr)] grid-cols-1">
        <Sidebar sidebarNavItems={sidebarNavItems}/>         
        <main className="bg-gray-100 p-4">
          <Outlet context={{ user }}/>
        </main>
      </div>
    </div>
  </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => React.useContext(DashboardContext);


export default DashboardLayout