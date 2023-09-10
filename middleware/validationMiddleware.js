import { body, param , validationResult } from "express-validator"
import { BadRequestError, NotFoundError } from "../errors/customError.js"
import mongoose from "mongoose"
import Product from "../models/ProductModel.js"

const withValidationErrors = (validationValues) => {
    return [
        validationValues,
        (req, res, next) => {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg)
                if(errorMessages[0].startsWith("no product")) {
                    throw new NotFoundError(errorMessages)
                }
                // return res.status(400).json({ errors: errorMessages })
                throw new BadRequestError(errorMessages)
            }
            next()
        },
    ]
}

// export const validateTest = withValidationErrors([
//     body("name")
//         .notEmpty()
//         .withMessage("name is required")
//         .isLength({ min:3, max:50 })
//         .withMessage("name must be between 3 & 50 characters")
//         .trim()
// ])


export const validateProductInput = withValidationErrors([
    body("name").notEmpty().withMessage("name is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("price").notEmpty().withMessage("price is required"),
    body("quantity").notEmpty().withMessage("quantity is required"),
    body("value").notEmpty().withMessage("value is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("SKU").notEmpty().withMessage("SKU is required"),
])

// if custom return true, goes to the controller, if false get message about invalid mongoDB id
export const validateIdParam = withValidationErrors([
    param("id")
        .custom(async (value) => {
            const isValidId = mongoose.Types.ObjectId.isValid(value)
            if(!isValidId) throw new BadRequestError("invalid mongoDb id")

            const product = await Product.findById(value)

            if(!product) throw new NotFoundError(`no product with an id of ${value}`)
        })
])