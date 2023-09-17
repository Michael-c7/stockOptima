import React from 'react'

import {
  HiChevronDown,
 } from "react-icons/hi"

const SearchContainer = () => {
  return (
    <div className='pb-4 flex flex-row items-center'>
        <input placeholder='Search' className='border rounded border-gray-200 p-2 rounded-r-none'/>
        <button className='border rounded border-gray-200 py-2 px-6  border-l-0  rounded-l-none flex flex-row items-center text-gray-700'>Filters<span className='flex flex-row items-center'><HiChevronDown/></span></button>
    </div>
  )
}

export default SearchContainer