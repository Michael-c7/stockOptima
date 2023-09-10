import { Router } from "express"
const router = Router()

import { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
 } from "../controllers/productController.js"
import { validateProductInput } from "../middleware/validationMiddleware.js"


 router.route("/")
    .get(getAllProducts)
    .post(validateProductInput, createProduct)

 router.route("/:id")
    .get(getProduct)
    .patch(validateProductInput, updateProduct)
    .delete(deleteProduct)

export default router