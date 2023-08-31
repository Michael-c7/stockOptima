import React from "react"
import { Link, Outlet } from "react-router-dom"

import stockOptimaLogo from "../assets/images/stockOptima-black.svg"
import { useLocation } from "react-router-dom";

import { splitCamelCase } from "../../utility"

import { 
  HiMenu,
  HiChevronDown,
  HiChartBar,
  HiUserCircle,
  HiDocumentAdd,
  HiFolderOpen,
} from "react-icons/hi"

import avatarImg from "../assets/images/avatar-1.jpg"

const DashboardLayout = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  let currentPage = currentRoute.substring(1).charAt(0).toUpperCase() + currentRoute.substring(1).slice(1);

  let asideNavItems = [
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
      <nav className=" bg-white border-b-2 flex flex-row justify-between items-center px-4">
        {/* mobile navbar */}
        <button className="text-3xl sm:hidden block">
          <HiMenu/>
        </button>

        {/* desktop logo */}
        <img src={stockOptimaLogo} alt="stockOptima logo" className="w-40 sm:block hidden"/>
      
        {/* current */}
        <h2 className="text-2xl">Dashboard</h2>

        {/* dropdown */}
        <div>
          <button className="flex flex-row  items-center bg-gray-200 rounded-full p-1">
            <img src={avatarImg} alt="user profile photo" className=" rounded-full w-7 h-7 object-cover"/>
            <span className=" text-sm mx-1">Johnny</span>
            <div>
              <HiChevronDown/>
            </div>
          </button>
          {/* the dropdown menu */}
          <div className="hidden">
            <button>Logout</button>
          </div>
        </div>
      </nav>
      <div className="flex flex-row bg-slate-500">
        <aside className="bg-white min-w-[225px] border-r-2 sm:flex hidden flex-col text-lg py-1">
          {asideNavItems.map(({text, path, icon}, index) => {
              return (
                <Link to={path} key={index} className="flex flex-row items-center py-2 px-4">
                  <span className="text-2xl mr-2">{icon}</span>
                  <span className="text-1xl">{text}</span>
                </Link>
              )
            })}
        </aside>

        <main className=" bg-gray-100 w-full p-4">
          <Outlet/>
        </main>
      </div>
    </div>
  )

  // return (
  //   // grid-template-rows: auto 1fr;
  //   <div className=" bg-gray-100 ">
  //     {/* navbar */}
  //     <nav className="flex flex-row justify-between items-center px-2 py-4 bg-white border">
  //       {/* mobile navbar */}
  //       <button className="text-3xl sm:hidden block">
  //         <HiMenu/>
  //       </button>
  //       {/* desktop logo */}
  //       <img src={stockOptimaLogo} alt="stockOptima logo" className="w-40 sm:block hidden"/>
  //       {/* <h2 className=" text-2xl">{currentPage}</h2> */}
  //       <h2 className=" text-2xl">Dashboard</h2>

  //       {/* dropdown */}
  //       <div>
  //         <button className="flex flex-row  items-center bg-gray-200 rounded-full p-1">
  //           <img src={avatarImg} alt="user profile photo" className=" rounded-full w-7 h-7 object-cover"/>
  //           <span className=" text-sm mx-1">Johnny</span>
  //           <div>
  //             <HiChevronDown/>
  //           </div>
  //         </button>
  //         {/* the dropdown menu */}
  //         <div className="hidden">
  //           <button>Logout</button>
  //         </div>
  //       </div>
  //     </nav>
  //     {/* dashboard main */}
  //     <div className="flex flex-row h-full">
  //       {/* side nav */}
  //       <aside className="sm:flex hidden flex-col bg-text bg-white px-4 pt-2 border-r-2">
  //         {asideNavItems.map(({text, path, icon}, index) => {
  //           return (
  //             <Link to={path} key={index} className="flex flex-row items-center py-2">
  //               <span className="text-2xl mr-2">{icon}</span>
  //               <span className="text-1xl">{text}</span>
  //             </Link>
  //           )
  //         })}
  //       </aside>
  //       {/* content */}
  //       <div className="p-4 w-full ">
  //         <Outlet/>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default DashboardLayout