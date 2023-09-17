import React from 'react'
import { Link } from 'react-router-dom'
import {
    HiEye,
    HiPencilAlt,
    HiTrash,
   } from "react-icons/hi"
import { truncateStringWithEllipsis } from '../utils/misc'
import DeleteProductModal from './DeleteProductModal'

const ProductContainer = ({item, index}) => {
  const { _id } = item

  let textLimitInCharacters = 15
  let [isDeleteProductModalOpen, setDeleteProductModalIsOpen] = React.useState(false)

  return (
    <tr className='w-full border-b-2'>
        <td className=' px-2'>{index + 1}</td>
        <td className='py-5'>{truncateStringWithEllipsis(item.name, textLimitInCharacters)}</td>
        <td className='px-2'>{truncateStringWithEllipsis(item.category, textLimitInCharacters)}</td>
        <td className='px-2'>${truncateStringWithEllipsis(item.price, textLimitInCharacters)}</td>
        <td className='px-2'>{truncateStringWithEllipsis(item.quantity, textLimitInCharacters)}</td>
        <td className='px-2'>${truncateStringWithEllipsis(item.value, textLimitInCharacters)}</td>
        <td className='px-2'>{truncateStringWithEllipsis(item.location, textLimitInCharacters)}</td>
        <td className='flex items-center mt-5 relative space-x-2 px-2 text-gray-600'>
            {/* single page link */}
            <Link to={`/dashboard/singleProduct/${_id}`}><HiEye/></Link>
            {/* edit page link */}
            <Link to={`/dashboard/editProduct/${_id}`}><HiPencilAlt/></Link>

            <DeleteProductModal {...{isDeleteProductModalOpen, setDeleteProductModalIsOpen, _id}}/>
            {/* Delete button */}
            <button onClick={() => setDeleteProductModalIsOpen(true)}><HiTrash/></button>
        </td>
  </tr>
  )
}

export default ProductContainer