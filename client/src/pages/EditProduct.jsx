import React from 'react'
import InputContainer from '../../components/InputContainer'
import { Form, redirect, useLoaderData, useParams } from 'react-router-dom'
import SubmitBtn from '../../components/SubmitBtn'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { SKUGenerator } from '../../utils/misc'


export const loader = async ({params}) => {
  try {
    const { data } = await customFetch.get(`products/${params.id}`)
    console.log(data)
    return data
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/allProducts');
  }
}

export const action = async ({request, params}) => {
  const formData = await request.formData()
  const initialData = Object.fromEntries(formData);

  console.log(params)

  const data = {
    ...initialData,
     SKU: SKUGenerator(
            initialData?.name,
            initialData?.category,
            initialData?.location,
            initialData?.price,
          ), 
     value: Number(initialData?.price) * Number(initialData?.quantity),
  }

  try {
    await customFetch.patch(`/products/${params.id}`, data)
    toast.success("Product Edited Successfully")
    return redirect("/dashboard/allProducts")
  } catch (error) {
    toast.error(error.response.data.msg);
    return error
  }
}

const EditProduct = () => {
  const { product } = useLoaderData()
  
  return (
    <section className="flex flex-col ">
      <Form method="post" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h2 className="text-2xl">Edit Product</h2>
        <InputContainer type="text" name="name" labelText="name" defaultValue={product.name}/>
        <InputContainer type="text" name="category" labelText="category" defaultValue={product.category}/>
        <InputContainer type="text" name="price" labelText="price" defaultValue={product.price}/>
        <InputContainer type="text" name="quantity" labelText="quantity" defaultValue={product.quantity}/>
        <InputContainer type="text" name="location" labelText="location" defaultValue={product.location}/>
        <div className="flex flex-col text-left my-4">
          <label htmlFor="description" className='font-light capitalize mb-1'>Description</label>
          <textarea id="description" name="description" className="border rounded border-gray-200 p-1 w-full" rows="5" defaultValue={product.description}></textarea>
        </div>

        <SubmitBtn {...{defaultText: "Update Product", submittingText: "Updating Product..."}}/>
      </Form>
    </section>
  )
}

export default EditProduct