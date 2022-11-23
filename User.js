import mongoose from "mongoose";
const UserSchema=mongoose.Schema(
    {
        username:
        {type:String},
        password:
        {type:String},
        
    }
)

const usermodel=mongoose.model("users",UserSchema)
export default usermodel