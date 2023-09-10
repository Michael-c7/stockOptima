import "express-async-errors"

import Product from "../models/ProductModel.js"
import { nanoid } from "nanoid"
import { StatusCodes } from "http-status-codes"


let products = [
    {id:nanoid(), name:"apple", quantity:2},
    {id:nanoid(), name:"grape", quantity:23}
]


export const getAllProducts = async  (req, res) => {
    const products = await Product.find({})

    res.status(StatusCodes.OK).json({products})
}





export const createProduct = async (req, res) => {
    const { name, quantity } = req.body
    const product = await Product.create(req.body)

    res.status(StatusCodes.CREATED).json({product})
}





export const getProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    
    res.status(StatusCodes.OK).json({ product })
}





export const updateProduct = async (req, res) => {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new:true })

    res.status(StatusCodes.OK).json({ msg: "product updated", product:updatedProduct })
}





export const deleteProduct = async (req, res) => {
    const { id } = req.params
    const removedProduct = await Product.findByIdAndDelete(id)

    res.status(StatusCodes.OK).json({ msg: "product removed" })
}
