import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import coursemodel from "./courses.js"
import usermodel from "./User.js"
import studentmodel from "./student.js"

//middle ware
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/courses", ()=>{
    console.log("connected to mongodb")
})
mongoose.createConnection('mongodb://127.0.0.1:27017/user')
mongoose.createConnection('mongodb://127.0.0.1:27017/students')
// mongoose.connect("mongodb://127.0.0.1:27017/users", ()=>{
//     console.log("connected to mongodb")
// })
app.listen(5000, ()=>{
    console.log("running on port 5000")
})
app.post("/addcourse",async(req,res)=>{
    let title=req.body.title
    let desc=req.body.desc
    let desc1=req.body.desc1
     let instructor=req.body.instructor
     let content=req.body.content
     let date=req.body.date
     let price=req.body.price
     let pic=req.body.pic
   
    let newCourse= await new coursemodel({title:title, desc,desc1, date,instructor,content,price,pic})
    if (newCourse) {
        await newCourse.save()
        // res.send("Course Added")
        console.log("added")
    }
    else {
        res.send("Error happened")
        console.log("no")
    }

})

app.get("/adduser",async(req,res)=>{
    // let title=req.body.title
    // let desc=req.body.desc
    let username="BetaAcademy"
    let password="123"
    let newuser= await new usermodel({username, password})
    if (newuser) {
        await newuser.save()
        // res.send("Course Added")
        console.log("added")
    }
    else {
        res.send("Error happened")
        console.log("no")
    }

})

app.post("/studentinfo",async(req,res)=>{
    
     let name=req.body.name
    let email=req.body.email
    let phone=req.body.phone
    let courseid=req.body.courseid
    // let name='fatta'
    //  let email='shatta'
    //  let phone='bakka'
    
    let newstudent= await new studentmodel({name,email, phone,courseid})
    if (newstudent) {
        await newstudent.save()
        // res.send("Course Added")
        console.log("added")
        res.send(newstudent._id)
    }
    else {
        res.send("Error happened")
        console.log("no")
    }

})

app.post("/Register",async(req,res)=>{
    let {username,password}=req.body
    let newuser= new usermodel({
        username:username
        ,password:password
    })
    if(newuser){
        await newuser.save()
        res.send({message:"ok",newuser})
    }
    else{
        res.send({message:"error"})
    }
})


app.post('/Login',async(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    console.log(username,password);
    usermodel.findOne({username:username,password:password},(err,user)=>{
        if(err){
            res.send({err,status:404})
        }
        else if(user)
        {
            console.log(user);
            res.send({message:"user found",user,status:200})

        }
        else{
            res.send({message:"no user found",status:401})
        }
    })
})

// app.post('/enrol',async(req,res)=>{
//     let name=req.body.name
//     let email=req.body.email
//     let phone=req.body.phone
//     studentmodel.findOne({name,email,phone},(err,user)=>{
//         if(err){
//             res.send({err,status:404})
//         }
//         else if(user)
//         {
//             console.log(user);
//             res.send({message:"student found",user,status:200})

//         }
//         else{
//             res.send({message:"no student found",status:401})
//         }
//     })
// })

// app.get("/deletecourse/:id",async (req,res)=>{
//     console.log("ana hena");
//     let iddd = req.params.id
//     console.log(iddd);
    // let deleted=await coursemodel.findById(id)
    

    // console.log(deleted);
    // if(deleted)
    // {
    //     await coursemodel.findByIdAndDelete(id)
    // res.send("ToDo with id "+ id+ " id deleted")
    // }
    // else{
    //     res.send("id is not found")
    // }


    // let deleted= coursemodel.findOne({_id:iddd},(err,crs)=>{
    //     if(err)
    //     res.send(err)
    //     else if(crs)
    //     {
        //  coursemodel.findByIdAndDelete(iddd)
        //  coursemodel.deleteOne(iddd)
//         coursemodel.remove(iddd)
//      res.send("course with id "+ iddd+ " id deleted")
//     console.log("el id mawgod");
//         }
//         else
//         console.log("000")
//     })
// })

app.get("/all", async(req,res)=>{
    let print=await coursemodel.find()
    res.send(print)
})

app.get("/deletecourse/:id",async (req,res)=>{
    let id = req.params.id
    let deleted=await coursemodel.findById(id)
    if(deleted)
    {
        await coursemodel.findByIdAndDelete(id)
    res.send("Course with id "+ id+ " id deleted")
    }
    else{
        res.send("id is not found")
    }
})

// app.post("/Test", async(req,res)=>{
//     const {name,phone,email,courseId}=req.body
//      coursemodel.findOne({_id:courseId},(err,course)=>{
//         if(err){res.send(err)}
//         else{console.log("before")
//          course.attendance.push({name,phone,email})
//          course.save()
//         console.log(course)
//         res.send("added")
//         }
//     })
// })
// app.get("/Getcourse/:id",async(req,res)=>{
// let id=req.params.id
// coursemodel.findOne({_id:id},(err,course)=>{
//     if(err){res.send(err)}
//     else{
//         res.send(course)
//     }
// })

// })




app.get("/students", async(req,res)=>{
    let print=await studentmodel.find()
    res.send(print)
})

app.get("/ayhaga/:sth",(req,res)=>{
    let sth=req.params.sth
    console.log("abl")
    let print=studentmodel.find({courseid:sth},(err,stu)=>{
        if(err)
        res.send(err)
        else if(stu)
        res.send(stu)
        else
        console.log("000")
    })
}) 