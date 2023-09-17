import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import {
  HiChevronLeft,
  HiChevronRight,
 } from "react-icons/hi"

import testImg from "../assets/images/avatar-1.jpg"
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import SearchContainer from '../../components/SearchContainer'
import ProductContainer from '../../components/ProductContainer'


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/products")
    return {data}
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null
  }
}

const AllProducts = () => {
  let testArr = Array.from({ length:5 })
  let testPageArr = Array.from({ length:5 })

  const { data } = useLoaderData()
  const { products } = data
  console.log(products)

  return (
    <>
    {products.length <= 0  && <h2 className=' text-5xl'>No Products</h2>}
    {products.length > 0  && (
      <section className=' bg-white p-4'>
      <SearchContainer products={products}/>
      
      
      <table className='w-full'>
        <thead>
          <tr className='text-left bg-gray-100 border-b-2 border-t-2'>
            <th>s/n</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <ProductContainer index={index} item={item} key={item._id}/>
            );
          })}
        </tbody>
      </table>

    {/* FOOTER */}
    <footer className='pt-14 pb-2 flex flex-row justify-between items-center text-gray-500'>
      <p>Showing 1 - 10 of 148 entries</p>
      <div className='flex flex-row items-center'>
        <button className='text-2xl bg-gray-100 mr-2'><HiChevronLeft/></button>
        {testPageArr.map((el, index) => {
          return (
            <button key={index} className='mx-2'>{index + 1}</button>
          )
        })}
        <button className='text-2xl bg-gray-100 ml-2'><HiChevronRight/></button>
      </div>
    </footer>
    </section>
    )}
    
    </>

  )
}

export default AllProducts