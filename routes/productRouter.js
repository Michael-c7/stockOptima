import { Router } from "express"
const router = Router()

import { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
 } from "../controllers/productController.js"
import { validateProductInput, validateIdParam } from "../middleware/validationMiddleware.js"
import upload from "../middleware/multerMiddleware.js"

//  upload.single("productImage") <-- for the post and patch routes

 router.route("/")
    .get(getAllProducts)
    .post(validateProductInput, createProduct)

 router.route("/:id")
    .get(validateIdParam, getProduct)
    .patch(validateProductInput,validateIdParam , updateProduct)
    .delete(validateIdParam, deleteProduct)

export default router