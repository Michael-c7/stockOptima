import React from 'react'
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';

export async function action({ params }) {
  try {
    await customFetch.delete(`/products/${params.id}`);
    toast.success('product deleted successfully');
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect('/dashboard/allProducts');
}

const DeleteProduct = () => {
  return (
    <div>DeleteProduct</div>
  )
}

export default DeleteProduct