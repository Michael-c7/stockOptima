import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name:String,
        category:String,
        price:Number,
        quantity:Number,
        value:Number,
        description:String,
        SKU:String,
    },
    { timestamps: true }
)


export default mongoose.model("Product", productSchema)