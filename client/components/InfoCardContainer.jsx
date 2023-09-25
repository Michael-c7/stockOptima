import React from 'react'
import { addCommasToNumber, truncateStringWithEllipsis } from '../utils/misc'



export const InfoCardContainer = ({icon, headingText, infoNumber}) => {
    let textLimitInCharacters = 200
  
    return (
      <div className="flex-1 bg-white p-8 space-y-6 rounded border-b-4 border-b-green-500 shadow-sm">
        <header className='flex justify-between items-center text-3xl '>
          <span>{addCommasToNumber(truncateStringWithEllipsis(infoNumber, textLimitInCharacters))}</span>
          <span className='bg-green-500 p-4 rounded text-white ml-2'>{icon}</span>
        </header>
        <h5 className='text-xl text-gray-700'>{truncateStringWithEllipsis(headingText, textLimitInCharacters)}</h5>
      </div>
    )
  }