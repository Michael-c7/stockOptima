import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Form } from 'react-router-dom'




const DeleteProductModal = ({ isDeleteProductModalOpen, setDeleteProductModalIsOpen, _id }) => {
  
  return (
    <Dialog open={isDeleteProductModalOpen} onClose={() => setDeleteProductModalIsOpen(false)} className="relative z-50 text-center ">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
          <Dialog.Title className="text-2xl font-bold">Delete Product</Dialog.Title>
          <Dialog.Description className="my-4 text-gray-600">
          Are you sure you want to delete this product?
          </Dialog.Description>
          <Form className='space-x-4' method='post' action={`../deleteProduct/${_id}`}>
            <button className='btn-main bg-red-500' type='submit'>Delete</button>
            <button className='btn-main bg-blue-500' type="button" onClick={() => setDeleteProductModalIsOpen(false)}>Cancel</button>
          </Form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default DeleteProductModal