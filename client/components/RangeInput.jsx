import React from 'react'
import { addCommasToNumber } from '../utils/misc'



const RangeInput = ({rangeName, id, value, onChange, }) => {
  return (
    <>
        <div className='flex items-center justify-between w-72'>
            <h3 className='text-gray-600'>{rangeName} {"greater than"} ({addCommasToNumber(value)})</h3>
            <button className='text-blue-500' onClick={() => onChange(0)}>Reset</button>
        </div>
        <div className='flex space-x-2 py-2 items-center'>
            <input type="range" id={id} name={id} value={value} max={1000} onChange={(e) => onChange(e.target.value)} className='border p-2 border-gray-300 rounded w-full'/>
        </div>
    </>
  )
}

export default RangeInput