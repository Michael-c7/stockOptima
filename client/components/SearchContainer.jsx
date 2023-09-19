import React from 'react'
import { Popover } from '@headlessui/react'

import { HiChevronDown } from "react-icons/hi"
 import { IoFilter } from "react-icons/io5"
 import { FiSearch } from "react-icons/fi"

import { PRODUCT_SORT_BY } from '../../utils/constants'
import MinMaxInputRange from './MinMaxInputRange'
import CombinedSearchInput from './CombinedSearchInput'


const SearchContainer = () => {
  let searchCategories = [
    "name",
    "category",
    "location",
    "sku",
    "description",
  ]




  return (
    <form className='pb-4 flex flex-col relative'>
      {/* search input */}
        <div className='flex items-center border rounded border-gray-200 p-2 rounded-r-none'>
          <FiSearch className=' text-gray-400 mr-1 relative'/>
          <input placeholder='Search' className='w-full outline-0'/>
        </div>
        {/* container for filter icon / text & filters */}
        <div className='flex lg:flex-row flex-col lg:items-center items-start  mt-4'>
        {/* Filter icon & text */}
          <div className='flex relative lg:mr-4 mr-0 lg:mb-0 mb-4'>
            <IoFilter className='text-lg top-[4px] relative mr-1'/>
            <span className='text-lg'>Filter</span>
          </div>
          {/* filters container*/}
          <div className='flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 '>
            {/* Combined Search*/}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Combined Search</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 space-y-4 w-full">
              {/* <input className='border rounded border-gray-600 p-2 rounded-r-none' value={testText} onChange={(e) => setTestText(e.target.value)}/> */}
              
                {/* combined search inputs */}
                {searchCategories.map((item, index) => {
                  let capitalizeFirstLetterString = item[0].toUpperCase() + item.slice(1);
                  return (
                    <CombinedSearchInput {...{item: capitalizeFirstLetterString, itemId:item}} key={index}/>
                  )
                })}
              </Popover.Panel>
            </Popover>

            {/* Price */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Price</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <MinMaxInputRange {...{rangeName:"Price", minId:"priceMin", maxId: "priceMax"}}/>
                </Popover.Panel>
            </Popover>

            {/* Quantity */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Quantity</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <MinMaxInputRange {...{rangeName:"Quantity", minId:"quantityMin", maxId: "quantityMax"}}/>
                </Popover.Panel>
            </Popover>

            {/* Value */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Value</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <MinMaxInputRange {...{rangeName:"Value", minId:"valueMin", maxId: "valueMax"}}/>
                </Popover.Panel>
            </Popover>

            {/* Created By */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
            <Popover.Button className="flex justify-between items-center w-full">
                  <span>Created By</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <MinMaxInputRange {...{rangeName:"Created by", minId:"createdByMin", maxId: "createdByMax", inputType:"date"}}/>
                </Popover.Panel>
            </Popover>

            {/* SORT */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Sort</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0 w-40 space-y-4">
                {Object.entries(PRODUCT_SORT_BY).map(([key, value]) => {
                  let capitalizeFirstLetterString = value[0].toUpperCase() + value.slice(1);
                  return (
                    <CombinedSearchInput {...{item: capitalizeFirstLetterString, inputType:"radio", itemId:"productSort"}} key={key}/>
                  )
                })}
                </Popover.Panel>
            </Popover>
          </div>
        </div>
    </form>
  )
}

export default SearchContainer