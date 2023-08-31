import React from 'react'
import { Link } from 'react-router-dom'

import {
  HiEye,
  HiPencilAlt,
  HiTrash,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
 } from "react-icons/hi"

import testImg from "../assets/images/avatar-1.jpg"

const AllProducts = () => {
  let testArr = Array.from({ length:5 })
  let testPageArr = Array.from({ length:5 })


  return (
    <section className=' bg-white p-4'>
      <div className='pb-4 flex flex-row items-center'>
        <input placeholder='Search' className='border rounded border-gray-200 p-2 rounded-r-none'/>
        <button className='border rounded border-gray-200 py-2 px-6  border-l-0  rounded-l-none flex flex-row items-center text-gray-700'>Filters<span className='flex flex-row items-center'><HiChevronDown/></span></button>
      </div>

      <table className='w-full'>
        {/* different topics */}
        <tr className=' text-left bg-gray-100 border-b-2 border-t-2'>
          <th>Name</th>
          <th>Photo</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
        {/* data */}
        {testArr.map((el, index) => {
          return (
            <tr key={index} className=' w-full border-b-2'>
              <td className='py-5'>apple</td>
              <td><img src={testImg} alt="product photo" className='w-8 h-8 rounded-full object-cover'/></td>
              <td>food</td>
              <td>$20</td>
              <td>5</td>
              <td>$100</td>
              <td className='flex items-center mt-5 relative space-x-2 text-gray-600'>
                <Link to="go to single product"><HiEye/></Link>
                <Link to="edit product"><HiPencilAlt/></Link>
                <Link to="delete product"><HiTrash/></Link>
              </td>
            </tr>
          )
        })}        
    </table>
    {/* FOOTER */}
    <footer className='pt-14 pb-2 flex flex-row justify-between items-center text-gray-500'>
      <p>Showing 1 - 10 of 148 entries</p>
      <div className='flex flex-row items-center'>
        <button className='text-2xl bg-gray-100 mr-2'><HiChevronLeft/></button>
        {testPageArr.map((el, index) => {
          return (
            <button key={index} className=' mx-2'>{index + 1}</button>
          )
        })}
        <button className='text-2xl bg-gray-100 ml-2'><HiChevronRight/></button>
      </div>
    </footer>
      
    </section>
  )
}

export default AllProducts