import React from "react"
import { Link } from "react-router-dom"

import stockOptimaLogo from "../src/assets/images/StockOptima-black.svg"
import { Menu } from '@headlessui/react'

import { 
  HiMenu,
  HiChevronDown,
  HiOutlineX,
} from "react-icons/hi"

import defaultUserImage from "../src/assets/images/default-user.jpg"

const Navbar = ({ user, logoutUser, sidebarNavItems }) => {

  return (
    <nav className="bg-white border-b-2 flex min-[320px]:flex-row flex-col justify-between items-center p-4 min-[320px]:z-auto z-10">
    {/* mobile navbar */}
    <Menu>
      {/* Open button for mobile menu */}
      <Menu.Button className="text-3xl sm:hidden block">
        <HiMenu/>
      </Menu.Button>

      <Menu.Items className="absolute bg-white flex flex-col drop-shadow z-40 left-0 top-0 w-full h-full p-4">
        {/* Close button for mobile menu */}
        <Menu.Item className="ml-auto">
        {({ close }) => (
          <button className="text-5xl text-red-700" onClick={close}>
          <HiOutlineX/>
          </button>
        )}
        </Menu.Item>
        {/* navigation for mobile menu */}
        {sidebarNavItems.map(({text, path, icon}, index) => {
          return (
          <Menu.Item key={index} className="flex flex-row justify-center items-center py-6 px-4 text-gray-700">
            <Link to={path}>
              <span className="text-3xl mr-2">{icon}</span>
              <span className="text-2xl">{text}</span>
            </Link>
            </Menu.Item>
            )
        })}
      </Menu.Items>
    </Menu>

    {/* desktop logo */}
    <img src={stockOptimaLogo} alt="stockOptima logo" className="w-40 sm:block hidden"/>
  
    {/* current */}
    <h2 className="text-2xl ">Dashboard</h2>

    {/* user dropdown */}
    <Menu>
      <Menu.Button className="flex flex-row items-center bg-gray-200 rounded-full p-1">
        <img src={user.avatar ? user.avatar : defaultUserImage} alt="user profile photo" className="rounded-full w-7 h-7 object-cover"/>
        <span className="text-sm mx-1">{user?.name || "User"}</span>
        <div>
          <HiChevronDown/>
        </div>
      </Menu.Button>

      <Menu.Items className="absolute bg-white flex flex-col top-20 right-5 drop-shadow z-10">
        <Menu.Item>
          {() => (
            <button className="bg-red-600 text-white py-2 px-6 rounded-sm" onClick={logoutUser}>
            Logout
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  </nav>
  )
}

export default Navbar