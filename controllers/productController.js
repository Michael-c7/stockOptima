import Product from "../models/ProductModel.js"
import { StatusCodes } from "http-status-codes"



export const getAllProducts = async  (req, res) => {
    const products = await Product.find({createdBy:req.user.userId})

    res.status(StatusCodes.OK).json({ products })
}





export const createProduct = async (req, res) => {
    req.body.createdBy = req.user.userId


    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
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
