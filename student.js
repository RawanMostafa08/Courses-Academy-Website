import mongoose from "mongoose";
const studentSchema=mongoose.Schema(
    {
        name:
        {type:String},
        email:
        {type:String},
        phone:
        {type:String},
        courseid:
        {type:String}
        
    }
)

const studentmodel=mongoose.model("students",studentSchema)
export default studentmodel