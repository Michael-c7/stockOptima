import mongoose from "mongoose"
import Product from "../models/ProductModel.js"
import { StatusCodes } from "http-status-codes"
import day from "dayjs"



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




export const showStats = async (req, res) => {

    let stats = await Product.aggregate([
      {
        $facet: {
          // Calculate totalStoreValue and totalProducts
          "totalStoreStats": [
            {
              $group: {
                _id: null,
                totalStoreValue: { $sum: "$value" },
                totalProducts: { $sum: 1 }
              }
            }
          ],
          // Get count of categories
          "categoryStats": [
            {
              $group: {
                _id: null,
                categories: { $addToSet: "$category" },
                allCategories: { $sum: 1 }
              }
            },
            { $unwind: "$categories" },
            {
              $group: {
                _id: null,
                allCategories: { $sum: 1 }
              }
            }
          ],
          // Calculate outOfStock
          "outOfStockStats": [
            {
              $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId), // Filter by createdBy ObjectId
                quantity: { $lt: 1 } // Match documents with quantity less than 1
              }
            },
            {
              $group: {
                _id: null,
                outOfStock: { $sum: 1 }
              }
            },
            {
              $project: {
                _id: 0,
                outOfStock: 1
              }
            }
          ]
        }
      }
    ])
    // get the data we want
    stats = {
      totalStoreValue: stats[0].totalStoreStats[0]?.totalStoreValue || 0,
      totalProducts: stats[0].totalStoreStats[0]?.totalProducts || 0,
      allCategories: stats[0].categoryStats[0]?.allCategories || 0,
      outOfStock: stats[0].outOfStockStats[0]?.outOfStock || 0
    }



    const defaultStats = {
        totalProducts:stats.totalProducts,
        totalStoreValue: stats.totalStoreValue,
        outOfStock:stats.outOfStock,
        allCategories:stats.allCategories,
    }



    let productsCreatedByMonth  = await Product.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      {
        $group: {
          _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 6 },
    ])
    // get the data we want
    productsCreatedByMonth  = productsCreatedByMonth 
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();





    // get the top 5 categories
    let popularCategories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          count: -1 // Sort in descending order based on the count
        }
      },
      {
        $limit: 5 // Get only the top 5 categories
      }
    ])
    // get the data we want
    popularCategories = popularCategories.map(({_id, count}) => {
      return {
        category:_id,
        count,
      }
    })





    let highestQuantityProducts = await Product.aggregate([
      {
        $sort: {
          quantity: -1 // Sort in descending order based on the quantity field
        }
      },
      {
        $limit: 10 // Get the top 10 products with the highest quantity
      },
      {
        $project: {
          _id: 0, // Exclude the _id field from the result
          name: 1, // Include the name field in the result
          quantity: 1 // Include the quantity field in the result
        }
      }
    ])





    let lowestQuantityProducts = await Product.aggregate([
      {
        $sort: {
          quantity: 1 // Sort in ascending order based on the quantity field
        }
      },
      {
        $limit: 10 // Get the top 10 products with the lowest quantity
      },
      {
        $project: {
          _id: 0, // Exclude the _id field from the result
          name: 1, // Include the name field in the result
          quantity: 1 // Include the quantity field in the result
        }
      }
    ])

    // NEED TO ADD CHECK FOR EMPTY VALUES FOR THE CHART DATA



    res.status(StatusCodes.OK).json({
      defaultStats,
      chartData:{
        productsCreatedByMonth,
        popularCategories,
        highestQuantityProducts,
        lowestQuantityProducts,
      }
    })
}

