import { body, param , validationResult } from "express-validator"
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customError.js"
import mongoose from "mongoose"
import Product from "../models/ProductModel.js"
import User from "../models/UserModel.js"


const withValidationErrors = (validateValues) => {
    return [
      validateValues,
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          const errorMessages = errors.array().map((error) => error.msg);
  
          const firstMessage = errorMessages[0];
          console.log(Object.getPrototypeOf(firstMessage));
          if (errorMessages[0].startsWith('no job')) {
            throw new NotFoundError(errorMessages);
          }
          if (errorMessages[0].startsWith('not authorized')) {
            throw new UnauthorizedError('not authorized to access this route');
          }
          throw new BadRequestError(errorMessages);
        }
        next();
      },
    ];
  };
  

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
        .custom(async (value, { req }) => {
            const isValidId = mongoose.Types.ObjectId.isValid(value)
            if(!isValidId) throw new BadRequestError("invalid mongoDb id")

            const product = await Product.findById(value)

            if(!product) throw new NotFoundError(`no product with an id of ${value}`)
            
            const isAdmin = req.user.role === "admin"
            const isOwner = req.user.userId === product.createdBy.toString()
            if(!isAdmin && !isOwner) throw new UnauthorizedError("not authorized to access this route")
        })
])


export const validateRegisterInput = withValidationErrors([
    body("name").notEmpty().withMessage("name is required"),
    body("email").notEmpty().withMessage("email is required").isEmail().withMessage("invalid email format").custom(async(email) => {
        const user = await User.findOne({email})
        if(user) {
            throw new BadRequestError("email already exists")
        }
    }),
    body("password").notEmpty().withMessage("password is required").isLength({min:8}).withMessage("password must be at least 8 characters long"),

])

export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("invalid email format"),
    body("password")
        .notEmpty()
        .withMessage("password is required"),
])