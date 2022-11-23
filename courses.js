import mongoose from "mongoose";
const CourseSchema=mongoose.Schema(
    {
        // _id: { type: String, required: true },
        title:
        {type:String},
        desc:
        {type:String},
        desc1:
        {type:String},
        content:
        {type:String},
        instructor:
        {type:String},
        date:
        {type:String},
        price:
        {type:String},
        pic:
        {type:String },

    }
)

const coursemodel=mongoose.model("courses",CourseSchema)
export default coursemodel