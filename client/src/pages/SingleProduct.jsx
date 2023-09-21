import React from 'react'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { Link, redirect, useLoaderData } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import DeleteProductModal from '../../components/DeleteProductModal'
import { addCommasToNumber } from '../../utils/misc'




dayjs.extend(utc); // Enable UTC plugin for proper handling of the provided UTC date


export const loader = async ({params}) => {
    try {
      const { data } = await customFetch.get(`products/${params.id}`)
      return data
    } catch (error) {
      toast.error(error.response.data.msg);
      return redirect('/dashboard/allProducts');
    }
}


const SingleProduct = () => {
  const { product } = useLoaderData()
  const dateCreated = dayjs(product.createdAt).utc().format("MM/DD/YYYY hh:mm A")
  const dateUpdated = dayjs(product.updatedAt).utc().format("MM/DD/YYYY hh:mm A")

  let [isDeleteProductModalOpen, setDeleteProductModalIsOpen] = React.useState(false)


  return (
    <div>
        <h2 className='text-3xl'>Product Details</h2>
        <div className='my-4 mx-4 space-y-4 text-lg'>
            <p>Name: {product.name}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${addCommasToNumber(product.price)}</p>
            <p>Quantity: {addCommasToNumber(product.quantity)}</p>
            <p>Total Value: ${addCommasToNumber(product.value)}</p>
            <p>location: {product.location}</p>
            <p>SKU: {product.SKU}</p>
            <p>Description: {product.description}</p>
            <p>Created At: {dateCreated}</p>
            <p>Date Updated: {dateUpdated}</p>
            <div className='space-x-4 h-full'>
              <Link className='btn-main' to={`/dashboard/editProduct/${product._id}`}>
              Edit product
              </Link>

              <DeleteProductModal {...{isDeleteProductModalOpen, setDeleteProductModalIsOpen, _id:product._id}}/>
              
              <button className='btn-secondary py-3' onClick={() => setDeleteProductModalIsOpen(true)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct