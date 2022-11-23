import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "./Showstudents.css"
import Students from './Students'
import "./Students.css"
function Showstudents(props) {

const [students, setStudent]= useState([])
// useEffect(()=>{axios.get("http://localhost:5000/students").then((res)=>{setStudent(res.data);});  },[]);
useEffect(()=>{axios.get(`http://localhost:5000/ayhaga/${props.course}`).then((res)=>{
res.data!="0"?  setStudent(res.data):alert("empty");});  },[]);

return (
  
  
    <div className='allstudents' >
    <div className='no'>Number of Students : {students.length}</div>
    <div className='stutitle'>
            <h1> Name</h1>
            <h1> Phone</h1>
            <h1> Email</h1>
        </div>
        {
             students.map((x)=>  <Students name={x.name} email={x.email}  phone={x.phone}  />)
        }
    </div>
  )

}

export default Showstudents
