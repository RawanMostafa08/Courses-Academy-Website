import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"
import {useEffect,useState} from 'react'

function Addws(){
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
const [desc1,setDesc1]=useState("")
const [content,setContent]=useState("")
const [instructor,setInstructor]=useState("")
const [date,setDate]=useState("")
const [price,setPrice]=useState("")
const [pic,setPic]=useState("")

const addcourse =()=>{
    if(title=="" || desc=="" || desc1=="" ||content=="" ||instructor=="" ||date=="" || price=="")
    alert("fill them")
    else 
    {
        axios.post("http://localhost:5000/addcourse",{title:title,desc:desc,desc1,content,instructor,date,price,pic})
        alert("done")
        window.location.href="/Editws"
    }
 
}    

const handleImage=(e)=>{
const file=e.target.files[0]
setFileToBase(file)
console.log(file)
}

const setFileToBase=(file)=>{
const reader=new FileReader()
reader.readAsDataURL(file)
reader.onloadend=()=>{
    setPic(reader.result)
}
}

    return(
        <div className="addws">
           
                <h1>Insert Workshop Details</h1>

                <input className="title" type="text" placeholder="Tile" onChange={(e)=>setTitle(e.target.value)}></input>
                <input className="title" type="text" placeholder="Desc" onChange={(e)=> setDesc(e.target.value)}></input>
                <textarea className="desc" type="text" placeholder="Description1" onChange={(e)=> setDesc1(e.target.value)}/>
                {/* <textarea className="desc" type="text" placeholder="Description2"/> */}
                
                <input className="title" type="text" placeholder="Content" onChange={(e)=> setContent(e.target.value)}/>
                <input className="desc" type="text" placeholder="Instructor"onChange={(e)=> setInstructor(e.target.value)}/>
                <textarea className="desc" type="text" placeholder="Date" onChange={(e)=> setDate(e.target.value)}/>
                <input className="title" type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input className="wsimg" type="file" id="img" name="img" accept="image/*" onChange={handleImage}/>
                {/* accept="image/*" */}
              <button onClick={addcourse}>Add Workshop</button>
              
        </div>
    )
}
export default Addws

