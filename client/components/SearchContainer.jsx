import React from 'react'
import { Popover } from '@headlessui/react'

import { HiChevronDown } from "react-icons/hi"
 import { IoFilter } from "react-icons/io5"
 import { FiSearch } from "react-icons/fi"

import { PRODUCT_SORT_BY } from '../../utils/constants'
import RangeInput from './RangeInput'
import CombinedSearchInput from './CombinedSearchInput'

import { Form, useSubmit, Link } from 'react-router-dom'
import SubmitBtn from './SubmitBtn'



const SearchContainer = ({ products, maxValuesForFilters }) => {
  let searchCategories = [
    "name",
    "category",
    "location",
    "sku",
    "description",
  ]


  const [searchInput, setSearchInput] = React.useState("")

  const [priceInput, SetPriceInput] = React.useState(0)
  const [quantityInput, SetQuantityInput] = React.useState(0)
  const [valueInput, SetValueInput] = React.useState(0)

  const [sortInput, setSortInput] = React.useState("newest")


  const submit = useSubmit()

  React.useEffect(() => {
    submit({
      search:searchInput,
      sort:sortInput,
      price:priceInput,
      quantity:quantityInput,
      value:valueInput,
    })
  }, [searchInput, sortInput, priceInput, quantityInput, valueInput])


  console.log(maxValuesForFilters[0].maxValue)
  return (
    <Form className='pb-4 flex flex-col relative'>
      {/* search input */}
        <div className='flex  justify-between items-center space-x-4'>
          <div className='flex items-center border rounded border-gray-200 p-2 rounded-r-none flex-1'>
            <FiSearch className='text-gray-400 mr-1 relative'/>
            <input placeholder='Search' name="search" className='w-full outline-0' defaultValue={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
          </div>
          <Link to="/dashboard/allProducts" className='btn-main py-2 px-3'>Reset search values</Link>
        </div>
        {/* container for filter icon / text & filters */}
        <div className='flex lg:flex-row flex-col lg:items-center items-start mt-4'>
        {/* Filter icon & text */}
          <div className='flex relative lg:mr-4 mr-0 lg:mb-0 mb-4'>
            <IoFilter className='text-lg top-[4px] relative mr-1'/>
            <span className='text-lg'>Filter</span>
          </div>
          {/* filters container*/}
          <div className='flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 '>
            {/* Price */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Price</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <RangeInput {...{rangeName:"Price", id:"price", value: priceInput, onChange:SetPriceInput, maxValue:maxValuesForFilters[0].maxPrice}}/>
                </Popover.Panel>
            </Popover>


            {/* Quantity */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Quantity</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <RangeInput {...{rangeName:"Quantity", id:"quantity", value: quantityInput, onChange:SetQuantityInput, maxValue:maxValuesForFilters[0].maxQuantity}}/>
                </Popover.Panel>
            </Popover>


            {/* Value */}
            <Popover className="relative border rounded border-gray-200 p-2 rounded-r-none">
                <Popover.Button className="flex justify-between items-center w-full">
                  <span>Value</span>
                  <HiChevronDown className='text-lg'/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white p-4 shadow-md top-12 left-0">
                  <RangeInput {...{rangeName:"Value", id:"value", value: valueInput, onChange:SetValueInput, maxValue:maxValuesForFilters[0].maxValue}}/>
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
                    <CombinedSearchInput {...{item: capitalizeFirstLetterString, inputType:"radio", itemId:"sort", checked:sortInput === value ? true : false ,onChangeFunction:(e) => setSortInput(e.target.value.toLowerCase())}} key={key}/>
                  )
                })}
                </Popover.Panel>
            </Popover>
          </div>
        </div>
    </Form>
  )
}

export default SearchContainer