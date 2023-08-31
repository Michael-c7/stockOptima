import React from 'react'

import { HiShoppingCart,HiCurrencyDollar,HiBan, HiDocumentText } from "react-icons/hi"

const Stats = () => {
  return (
    <section>
      <div className='flex flex-row space-x-6'>
        <div className='flex flex-row items-center bg-white p-4 drop-shadow-sm'>
          <div className='text-4xl mr-2'>
            <HiShoppingCart/>
          </div>
          <div>
              <h2>Total Products</h2>
              <p>1</p>
          </div>
        </div>
        <div className='flex flex-row items-center bg-white p-4 drop-shadow-sm'>
          <div className='text-4xl mr-2'>
            <HiCurrencyDollar/>
          </div>
          <div>
              <h2>Total Store Value</h2>
              <p>1</p>
          </div>
        </div>
        <div className='flex flex-row items-center bg-white p-4 drop-shadow-sm'>
          <div className='text-4xl mr-2'>
            <HiBan/>
          </div>
          <div>
              <h2>Out of Stock</h2>
              <p>1</p>
          </div>
        </div>
        <div className='flex flex-row items-center bg-white p-4 drop-shadow-sm'>
          <div className='text-4xl mr-2'>
            <HiDocumentText/>
          </div>
          <div>
              <h2>All Categories</h2>
              <p>1</p>
          </div>
        </div>
      </div>

      <div>
        bar / pie carts here
      </div>

      
    </section>
  )
}

export default Stats