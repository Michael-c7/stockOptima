import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import morgan from "morgan"
import mongoose from "mongoose"

// routers
import productRouter from "./routes/productRouter.js"

// middleware
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js"






if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello world!")
})

app.post("/", (req, res) => {
    console.log(req)
    res.json({ message: "data received", data:req.body })
})


app.use("/api/v1/products", productRouter)

// used when a request to a route doesn't exist
app.use("*", (req, res) => {
    res.status(404).json({msg: "not found"})
})

// used to handle any error that happens during the process of the request
app.use(errorHandleMiddleware)


const port = process.env.PORT || 5100


try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
} catch(error) {
    console.log(error)
    process.exit(1)
}



