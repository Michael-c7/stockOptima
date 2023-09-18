import React from 'react'
import { Popover, Disclosure } from '@headlessui/react'

import {
  HiChevronDown,
  HiX,
 } from "react-icons/hi"
import { PRODUCT_SORT_BY } from '../../utils/constants'




const SearchContainer = () => {


  return (
    <div className='pb-4 flex flex-row items-center relative'>
        <input placeholder='Search' className='border rounded border-gray-200 p-2 rounded-r-none'/>
        
        <Popover>
          {/* open filters menu button */}
          <Popover.Button className='border rounded border-gray-200 py-2 px-6 border-l-0 rounded-l-none flex flex-row items-center text-gray-700'>
            Filter
            <span className='flex flex-row items-center'>
              <HiChevronDown/>
            </span>
          </Popover.Button>
          {/* Filter Menu */}
          <Popover.Panel className="absolute z-10 bg-white p-4 shadow-lg rounded">
            <form>
              <div className='flex justify-between space-x-2 relative'>
                <h2 className='text-lg'>Filter by:</h2>
                <Popover.Button className="text-lg">
                  <HiX/>
                </Popover.Button>
              </div>

              <hr className='bottom-border'/>

              {/* all filters */}
              <div className='mx-2 space-y-4'>
                {/* multiselect search includes */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full ">
                    <span>Text search includes</span>
                    <HiChevronDown className=' text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel className="mx-4 space-y-1">
                      <div className='flex items-center py-[2px] '>
                          <label htmlFor="name" className='mr-1'>Name</label>
                          {/* should be checked={true} by default */}
                          <input type="checkbox" id="name" name="name" value="Bike"  /> 
                        </div>
                        <div className='flex items-center py-[2px]'>
                          <label htmlFor="category" className='mr-1'>Category</label>
                          <input type="checkbox" id="category" name="category" value="Bike"/>
                        </div>
                        <div className='flex items-center py-[2px]'>
                          <label htmlFor="vehicle1" className='mr-1'>Location</label>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        </div>
                        <div className='flex items-center py-[2px]'>
                          <label htmlFor="vehicle1" className='mr-1'>SKU</label>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        </div>
                        <div className='flex items-center py-[2px]'>
                          <label htmlFor="vehicle1" className='mr-1'>Description</label>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      </div>
                    </Disclosure.Panel>
                </Disclosure>
                
                {/* Price */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full">
                    <span>Price</span>
                    <HiChevronDown className=' text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel>
                    <div className='flex flex-row mx-4 p-1 space-x-4 relative after:w-[calc(100%+5rem)] after:left-[calc(-2.5rem)]'>
                    <div className='flex flex-col py-1'>
                      <label htmlFor="createdByMin">Min</label>
                      <input type="text" id="createdByMin" name="createdByMin" className='border p-1 border-gray-300 rounded' placeholder=' min'/>
                    </div>
                    <div className='flex flex-col py-1'>
                      <label htmlFor="createdByMax">Max</label>
                      <input type="text" id="createdByMax" name="createdByMax" className='border p-1 border-gray-300 rounded' placeholder=' max'/>
                    </div>
                  </div>
                    </Disclosure.Panel>
                </Disclosure>


                {/* Quantity */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full">
                    <span>Quantity</span>
                    <HiChevronDown className=' text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel>
                    <div className='flex flex-row mx-4 p-1 space-x-4 relative   after:w-[calc(100%+5rem)] after:left-[calc(-2.5rem)]'>
                      <div className='flex flex-col py-1'>
                        <label htmlFor="createdByMin">Min</label>
                        <input type="text" id="createdByMin" name="createdByMin" className='border p-1 border-gray-300 rounded' placeholder=' min'/>
                      </div>
                      <div className='flex flex-col py-1'>
                        <label htmlFor="createdByMax">Max</label>
                        <input type="text" id="createdByMax" name="createdByMax" className='border p-1 border-gray-300 rounded' placeholder=' max'/>
                      </div>
                  </div>
                    </Disclosure.Panel>
                </Disclosure>


                {/* Value */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full">
                    <span>Value</span>
                    <HiChevronDown className=' text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel>
                    <div className='flex flex-row mx-4 p-1 space-x-4'>
                    <div className='flex flex-col py-1'>
                      <label htmlFor="createdByMin">Min</label>
                      <input type="text" id="createdByMin" name="createdByMin" className='border p-1 border-gray-300 rounded' placeholder=' min'/>
                    </div>
                    <div className='flex flex-col py-1'>
                      <label htmlFor="createdByMax">Max</label>
                      <input type="text" id="createdByMax" name="createdByMax" className='border p-1 border-gray-300 rounded' placeholder=' max'/>
                    </div>
                  </div>
                    </Disclosure.Panel>
                </Disclosure>


                {/*
                https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
                theirs a max and min prop for the input date, use this to restrict the selection when another date input is selected eg: user inputs a date into the min input, use this min as the min prop the max so you dont get, and the inverse as well so you dont get any weird bugs.
                the min and max properties take a string in format yyyy-mm-dd eg: 1979-12-31
                */}

                {/* Created by */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full">
                    <span>Created By</span>
                    <HiChevronDown className='text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel>
                    <div className='flex flex-row mx-4 p-1 space-x-4'>
                    <div className='flex flex-col'>
                      <label htmlFor="createdByMin">Min</label>
                      <input type="date" id="createdByMin" name="createdByMin" className='border p-1 border-gray-300 rounded'></input>
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="createdByMax">Max</label>
                      <input type="date" id="createdByMax" name="createdByMax" className='border p-1 border-gray-300 rounded'></input>
                    </div>
                  </div>
                    </Disclosure.Panel>
                </Disclosure>



                {/* SORT */}
                <Disclosure defaultOpen={true}>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full">
                    <span>Sort</span>
                    <HiChevronDown className='text-lg'/>
                  </Disclosure.Button>
                    <Disclosure.Panel>
                      <select name="sort" id="sort" className='border border-gray-300 rounded mx-4 p-2'>
                        {Object.keys(PRODUCT_SORT_BY).map((value, index) => {
                          let text = Object.values(PRODUCT_SORT_BY)[index]
                          return (
                            <option value={value} key={index}>{text}</option>
                          )
                        })}
                      </select>
                    </Disclosure.Panel>
                </Disclosure>
              </div>

              <hr className='bottom-border'/>

              <div className='flex justify-end'>
                <button className='text-blue-400 mr-4'>Reset Filter</button>
                <button type='submit' className='btn-main py-2 px-6'>Apply</button>
              </div>
            </form>
          </Popover.Panel>
        </Popover>
    </div>
  )
}

export default SearchContainer