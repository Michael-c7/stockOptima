import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: {
        type:String,
        enum: ["user", "admin"],
        default:"user",
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
})

export default mongoose.model("User", UserSchema)