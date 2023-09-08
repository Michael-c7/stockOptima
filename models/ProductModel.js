import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name:String,
        category:String,
        price:Number,
        quantity:Number,
        value:Number,
        inStock:{
            type: Boolean,
            default:true,
        },
        description:String,
    },
    { timestamps: true }
)


export default mongoose.model("Product", productSchema)