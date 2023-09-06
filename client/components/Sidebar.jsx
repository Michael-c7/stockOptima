import React from 'react'
import { Link } from "react-router-dom"


const Sidebar = ({ sidebarNavItems }) => {
  return (
    <aside className="bg-white md:w-[225px] w-[auto] border-r-2 sm:flex hidden flex-col text-lg py-2">
      {sidebarNavItems.map(({text, path, icon}, index) => {
        return (
          <Link to={path} key={index} className="flex flex-row items-center py-2 px-4 text-gray-700 hover:text-green-500">
            <span className="text-2xl mr-2">{icon}</span>
            <span className="text-1xl md:block hidden">{text}</span>
          </Link>
        )
      })}
    </aside>
  )
}

export default Sidebar