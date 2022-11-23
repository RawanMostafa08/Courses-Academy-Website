import i0 from '../images/robotics.jpg'
import i1 from '../images/autocad.jpg'
import i2 from '../images/matlab.jpg'
import i3 from '../images/photoshop.jpg'
import { Link } from 'react-router-dom';
import Addws from './Addws';
import './Workshops.css';
import SingleAdmin from './SingleAdmin';
import axios from 'axios';
import React from "react"
import"./Login.css"
import {useEffect,useState} from 'react'
function Editws(){
    const [all, setAll]= useState([])


const HandleLogout=()=>{
    localStorage.clear()
    window.location.href="/Login"
}



    const getallcourses=()=>{
    axios.get("http://localhost:5000/all").then((res)=>{setAll(res.data);})
    console.log(all[8])
    //   alert(JSON.stringify( all[8]))
    }
useEffect(()=>{getallcourses();},[]);
    return(
    <div className="workshops">
       <div className="heta"></div>
       { all.map((x)=> <SingleAdmin title={x.title} desc={x.desc} content={x.content} 
    instructor={x.instructor} date={x.date} imgs={i0}  free={x.price}  user="Remove" course={x._id}

     desc1={x.desc1}
     
     />
    
    )}  

{/* 
       { all.map((x)=> <SingleAdmin title={x.title} desc={x.desc} content={x.content} 
    instructor={x.instructor} date={x.date} imgs={x.pic}  free={x.price} user="Remove" 
     course={x._id}
     desc1={x.desc1}
     
     />
    
    )}   */}

        <Addws/>
        <div className='ashraf'>
        <button className='logout_button' onClick={HandleLogout}>Logout</button>

        </div>
    </div>
    )
}
export default Editws