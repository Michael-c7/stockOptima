import React from "react"
import { Form, Link, useNavigation, useOutletContext, redirect } from "react-router-dom"
import InputContainer from "../../components/InputContainer"

import customFetch from "../../utils/customFetch"
import { toast } from "react-toastify"
import SubmitBtn from "../../components/SubmitBtn"
import { SKUGenerator } from "../../utils/misc"



export const action = async ({ request }) => {
  const formData = await request.formData();
  const initialData = Object.fromEntries(formData);

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
    await customFetch.post('/products', data);
    toast.success('product added successfully');
    return redirect('allProducts');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}



const AddProduct = () => {
  const { user } = useOutletContext()

  return (
    <section className="flex flex-col">
      <Form method="post" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h2 className="text-2xl">Create Product</h2>
        <InputContainer type="text" name="name" labelText="name" />
        <InputContainer type="text" name="category" labelText="category" />
        <InputContainer type="text" name="price" labelText="price" />
        <InputContainer type="text" name="quantity" labelText="quantity" />
        <InputContainer type="text" name="location" labelText="location" />
        <div className="flex flex-col text-left my-4">
          <label htmlFor="description" className='font-light capitalize mb-1'>Description</label>
          <textarea id="description" name="description" className="border rounded border-gray-200 p-1 w-full" rows="5"></textarea>
        </div>

        <SubmitBtn {...{defaultText: "Add Product", submittingText: "Adding Product..."}}/>
      </Form>
    </section>
  )
}

export default AddProduct