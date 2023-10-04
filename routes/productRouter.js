import { Router } from "express"
const router = Router()

import { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    showStats,
 } from "../controllers/productController.js"
 
import { 
   validateProductInput,
   validateIdParam
} from "../middleware/validationMiddleware.js"
import { checkForDemoUser } from "../middleware/authMiddleware.js"


 router.route("/")
   .get(getAllProducts)
   .post(checkForDemoUser, validateProductInput, createProduct)


 router.route("/stats").get(showStats)

 router.route("/:id")
   .get(validateIdParam, getProduct)
   .patch(checkForDemoUser, validateProductInput, validateIdParam, updateProduct)
   .delete(checkForDemoUser, validateIdParam, deleteProduct)

export default router