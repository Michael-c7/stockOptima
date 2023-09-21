import Product from "../models/ProductModel.js"
import { StatusCodes } from "http-status-codes"



export const getAllProducts = async  (req, res) => {
    const { search, sort } = req.query
    console.log(req.query)
    const queryObject = {
        createdBy:req.user.userId,
    }

    /*For filter need to setup / figure out how to do price,
    value ect ranges and setup / figure out how to do text search includes */
    if(search) {
        // only add if it exists
        queryObject.$or = [
            { name: { $regex:search, $options:"i" } },
            { category: { $regex:search, $options:"i" } },
        ]
    }

    const sortOptions = {
        newest:"-createdAt",
        oldest:"createdAt",
        "a-z":"name",
        "z-a":"-name",
    }

    const sortKey = sortOptions[sort] || sortOptions.newest


    // setup pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 8
    const skip = (page - 1) * limit

    const products = await Product.find(queryObject).sort(sortKey).skip(skip).limit(limit)

    const totalProducts = await Product.countDocuments(queryObject)
    const numOfPages = Math.ceil(totalProducts / limit)

    res.status(StatusCodes.OK).json({ totalProducts, numOfPages, currentPage:page, products })
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
