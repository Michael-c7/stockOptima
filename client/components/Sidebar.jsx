import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


const Sidebar = ({ sidebarNavItems }) => {
  const location = useLocation();

  return (
    <aside className="bg-white md:w-[225px] w-[auto] border-r-2 sm:flex hidden flex-col text-lg py-2">
      {sidebarNavItems.map(({text, path, icon}, index) => {
        let currentUrl = location.pathname

        /* 
        This variable checks if the current url is 
        equal to the path(of the route). the reason theirs
        two /dashboards is because the addProducts url is /dashboard
        and the rest are their respective routes so /dashboard/ExampleRoute
        and the route for the addProduct is "" 
        */
        const isCurrentPathSelected = (currentUrl.replace(currentUrl.length > 10 ? "/dashboard/" : "/dashboard", "") === path) && "text-green-500";

        return (
          <Link to={path} key={index} className={`flex flex-row items-center py-2 px-4 text-gray-700 hover:text-green-500 ${isCurrentPathSelected}`}>
            <span className="text-2xl mr-2">{icon}</span>
            <span className="text-1xl md:block hidden">{text}</span>
          </Link>
        )
      })}
    </aside>
  )
}

export default Sidebar