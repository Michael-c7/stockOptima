import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Product from "../models/ProductModel.js";



export const getCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: "get current user"})
}

export const getApplicationStats = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: "get app stats"})
}

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: "update user"})
}