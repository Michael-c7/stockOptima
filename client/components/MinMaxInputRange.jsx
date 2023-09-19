import React from 'react'

const MinMaxInputRange = ({rangeName, minId, maxId, inputType = "text"}) => {
  return (
    <>
        <div className='flex items-center justify-between'>
            <h3 className='text-gray-600'>{rangeName} Range</h3>
            <button className='text-blue-500'>Reset</button>
        </div>
        <div className='flex space-x-2 py-2 items-center'>
            <input type={inputType} id={minId} name={minId} className='border p-2 border-gray-300 rounded' placeholder='min'/>
            <div className=' bg-gray-300 w-4 h-[1px]'></div>
            <input type={inputType} id={maxId} name={maxId} className='border p-2 border-gray-300 rounded' placeholder='max'/>
        </div>
    </>
  )
}

export default MinMaxInputRange