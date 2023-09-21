import React from 'react'
import { Link } from 'react-router-dom'
import {
    HiEye,
    HiPencilAlt,
    HiTrash,
   } from "react-icons/hi"
import { addCommasToNumber, truncateStringWithEllipsis } from '../utils/misc'
import DeleteProductModal from './DeleteProductModal'

import { Tooltip as ReactTooltip } from "react-tooltip";


const ProductContainer = ({item, index}) => {
  const { _id } = item

  let textLimitInCharacters = 15
  let [isDeleteProductModalOpen, setDeleteProductModalIsOpen] = React.useState(false)

  addCommasToNumber
  return (
    <tr className='w-full border-b-2'>
        <td className=' px-2'>{index + 1}</td>
        <td className='py-5'>{truncateStringWithEllipsis(item.name, textLimitInCharacters)}</td>
        <td className='px-2'>{truncateStringWithEllipsis(item.category, textLimitInCharacters)}</td>
        <td className='px-2'>${addCommasToNumber(truncateStringWithEllipsis(item.price, textLimitInCharacters))}</td>
        <td className='px-2'>{addCommasToNumber(truncateStringWithEllipsis(item.quantity, textLimitInCharacters))}</td>
        <td className='px-2'>${addCommasToNumber(truncateStringWithEllipsis(item.value, textLimitInCharacters))}</td>
        <td className='px-2'>{truncateStringWithEllipsis(item.location, textLimitInCharacters)}</td>
        <td className='flex items-center mt-5 relative space-x-2 px-2 text-gray-600'>
            {/* single page link */}
            <Link to={`/dashboard/singleProduct/${_id}`} data-tooltip-id="single-product-tooltip-id"><HiEye/></Link>
            {/* single page tooltip */}
            <ReactTooltip
              id="single-product-tooltip-id"
              place="top"
              content="View Product Details"
            />
            
            {/* edit page link */}
            <Link to={`/dashboard/editProduct/${_id}`} data-tooltip-id="edit-product-tooltip-id"><HiPencilAlt/></Link>
            {/* single page tooltip */}
            <ReactTooltip
              id="edit-product-tooltip-id"
              place="top"
              content="Edit Product Details"
            />

            <DeleteProductModal {...{isDeleteProductModalOpen, setDeleteProductModalIsOpen, _id}}/>
            {/* Delete button */}
            <button onClick={() => setDeleteProductModalIsOpen(true)} data-tooltip-id="delete-product-tooltip-id"><HiTrash/></button>
        
            {/* single page tooltip */}
            <ReactTooltip
              id="delete-product-tooltip-id"
              place="top"
              content="Delete Product"
            />
        </td>
  </tr>
  )
}

export default ProductContainer