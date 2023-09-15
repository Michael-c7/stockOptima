import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Product from "../models/ProductModel.js";
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';


export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({_id:req.user.userId})
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json({ user: userWithoutPassword })
}

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments()
    const products = await Product.countDocuments()
    res.status(StatusCodes.OK).json({ users, products })
}

export const updateUser = async (req, res) => {
    const newUser = {...req.body}
    delete newUser.password

    if(req.file) {
        const response = await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        newUser.avatar = response.secure_url
        newUser.avatarPublicId = response.public_id
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser)

    // remove the previous profile / avatar image
    if (req.file && updatedUser.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    }

    res.status(StatusCodes.OK).json({msg: "update user"})
}