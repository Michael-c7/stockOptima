import React from "react"
import { Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer"

import testImg from "../assets/images/avatar-2.jpg"

const AddProduct = () => {
  let isImageShown = false

  return (
    <section className="flex flex-col ">
      <form method="post" action="/register" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        {/* product image container */}
        <div>
          <h2 className="text-lg">Product Image</h2>
          <p className=" text-xs mb-2">Supported Formats: jpg, jpeg, png</p>
          <div className="border flex items-center p-2">
          <input type="file" id="myFile" name="filename" className=" p-1 mr-2"/>
          </div>
          {/* actual image that user selects here */}
          {isImageShown ? ( 
            <img src={testImg} alt="image name here" className="border border-t-0"/>
            ) : (
            <p className="my-2">No image chosen</p>
            )}
        </div>
        
        <InputContainer type="text" name="name" labelText="name" />
        <InputContainer type="text" name="category" labelText="category" />
        <InputContainer type="text" name="price" labelText="price" />
        <InputContainer type="text" name="quantity" labelText="quantity" />
        <div className="flex flex-col text-left my-4">
          <label htmlFor="description" className='font-light capitalize mb-1'>Description</label>
          <textarea id="description" name="description" className="border rounded border-gray-200 p-1 w-full" rows="5"></textarea>
        </div>

        <button type="submit" className="btn-main w-full">Add Product</button>
      </form>
    </section>
  )
}

export default AddProduct