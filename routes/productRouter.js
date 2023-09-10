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


 router.route("/")
    .get(getAllProducts)
    .post(validateProductInput, createProduct)

 router.route("/:id")
    .get(validateIdParam, getProduct)
    .patch(validateProductInput,validateIdParam , updateProduct)
    .delete(validateIdParam, deleteProduct)

export default router