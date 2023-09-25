import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import morgan from "morgan"
import mongoose from "mongoose"
import { authenticateUser } from "./middleware/authMiddleware.js"
import cookieParser from "cookie-parser"
// import { validateTest } from "./middleware/validationMiddleware.js"
import {v2 as cloudinary} from 'cloudinary';
// routers
import productRouter from "./routes/productRouter.js"
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';


// middleware
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js"


          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});



const __dirname = dirname(fileURLToPath(import.meta.url));


if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello world!")
})

// app.post("/api/v1/test",
// validateTest,
//  (req, res) => {
//     const { name } = req.body
//     console.log(req)
//     res.json({ message: `hello ${name}` })
// })

app.get("/api/v1/test", (req, res) => {
    res.json({ msg:"test route" })
})


// base route for products
app.use("/api/v1/products", authenticateUser, productRouter)
// base route for auth
app.use("/api/v1/users", authenticateUser, userRouter)
app.use("/api/v1/auth", authRouter)



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

  



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



