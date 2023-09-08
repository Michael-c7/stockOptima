import { Router } from "express"
const router = Router()

import { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
 } from "../controllers/productController.js"


 router.route("/")
    .get(getAllProducts)
    .post(createProduct)

 router.route("/:id")
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

export default router