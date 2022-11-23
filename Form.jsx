import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Form.css"
import Workshops from './Workshops'
import Single from './Single'
function Form(props) {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[courseid,setCourseid]=useState("")
    
    const Form=(props)=>{
      if(name==="" || phone==="" || email===""){
          alert("please fill all fields")
      }
      else
      { 
      
      axios.post("http://localhost:5000/studentinfo",{name:name,email,phone,courseid}).then((res)=>{
       
      })
      alert("Thank you")
      window.location.href="/Workshops"
      
      }
  }

 
 


  return (
    <div className='allform'>
      

      <div className='student_form'>
        <h1>Fill in the Form</h1>
       <input type="text" placeholder='Enter your Name'
        onChange={e=>{
            setName(e.target.value)
        }}/>
        <input type="text" placeholder='Enter your Phone'
        onChange={e=>{
            setPhone(e.target.value)
        }}/>
        <input type="text" placeholder='Enter your Email'
        onChange={e=>{
            setEmail(e.target.value)
            setCourseid(props.course)
        }}/>
        <button className='submit_button' onClick={Form}>Submit</button> 
        
        
{/* <h2>Login Form</h2>

<form action="/action_page.php" method="post">
  <div class="imgcontainer">
    
 

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    </div>
  </div>

  
</form>
    



      </div> */}



</div>
    </div>
  )
}

export default Form
