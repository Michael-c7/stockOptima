import React from 'react'

const CombinedSearchInput = ({item, inputType = "checkbox", itemId}) => {
    

    return (
        <>
            <label htmlFor={item} className='flex justify-between items-center py-[2px]'>
            <span className='mr-1'>{item}</span>
            <input type={inputType} id={item} name={itemId} value={item} /> 
            </label>
        </>
    )
}

export default CombinedSearchInput