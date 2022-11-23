import './Workshops.css';
import Single from './Single';
import i0 from '../images/robotics.jpg'
import i1 from '../images/autocad.jpg'
import i2 from '../images/matlab.jpg'
import i3 from '../images/photoshop.jpg'
import axios from 'axios';
import React from "react"
import Form from './Form';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {useEffect,useState} from 'react'
function Workshops(){
    <Router>
    <Routes>
    <Route path='/Form' element={<Form/>}/>
</Routes>
</Router>
    const [all, setAll]= useState([])
    const getallcourses=()=>{
        axios.get("http://localhost:5000/all").then((res)=>{setAll(res.data);})
    // console.log(all[8])
    //   alert(JSON.stringify( all[8]))
    }
useEffect(()=>{getallcourses();},[]);

    return(
    <div className="workshops">
        <div className="start">
            <h1>Discover Our Workshops</h1>
            <h2>Join Us Now!</h2>
        </div>
        

        { all.map((x)=> <Single title={x.title} desc={x.desc} content={x.content} 
    instructor={x.instructor} date={x.date} imgs={i0}  free={x.price} user="Enrol Now!"  
    course={x._id}
     desc1={x.desc1}
     
     />
    
    )}
    {/* <Single title={JSON.stringify(all[8].title)} desc="About this Workshop" content="http://shorturl.at/gDK03" 
    instructor="ay 7d" date="ay w2t" imgs={i0}  free="bs 30 LE " user="Enroll Now!" click="/Register"

     desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"
     desc2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"/>
    
    <Single title="Autocad" desc="Lorem ipsum dolor sit " content="http://shorturl.at/gDK03" 
    instructor="ay 7d" date="ay w2t" imgs={i1}  free="bs 30 LE " user="Enroll Now!" click="/Register"
     desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"
     desc2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"/>
    
    <Single title="Matlab" desc="Lorem ipsum dolor sit " content="http://shorturl.at/gDK03" 
    instructor="ay 7d" date="ay w2t" imgs={i2} free="bs 30 LE " user="Enroll Now!" click="/Register"
     desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"
     desc2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"/>
    
    <Single title="Photoshop" desc="Lorem ipsum dolor sit " content="http://shorturl.at/gDK03" 
    instructor="ay 7d" date="ay w2t" imgs={i3}  free="bs 30 LE " user="Enroll Now!" click="/Register"
     desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"
     desc2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quas. Itaque molestiae labore iusto quisquam, debitis minima rem temporibus. Harum quae velit odio obcaecati sunt dolorum dolorem esse repudiandae nulla"/>
     */}



    </div>
    )
}
export default Workshops