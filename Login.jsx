import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Login.css" 
import { Link } from 'react-router-dom'
import Adminws from './Adminws'
function Login() {
  const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const [user,setUser]=useState([])
    const Login=()=>{
      // localStorage.clear()
      if(username==="" &&password===""){
          alert("please fill all fields")
      }
      else{
          axios.post("http://localhost:5000/Login",{
              username:username,
              password:password
          }).then((res)=>{
              console.log(res.data);
              if(res.data.status===200)
              {
                setUser(res.data.user)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                window.location.href="/Adminws"
                alert(res.data.message)
              }
              else if(res.data.status===401)
              {
                alert(res.data.message)
              }

          })
      }
  }
  return (
    <div className='all'>
    <div className='login'>
        <h1>Welcome To Beta Academy</h1>
       <input type="text" placeholder='Enter your Username'
        onChange={e=>{
            setUsername(e.target.value)
        }}/>
        <input type="password" placeholder='Enter your Password'
        onChange={e=>{
            setPassword(e.target.value)
        }}/>
        <button className='login_button' onClick={Login}>Login</button> 
        
    
    </div>
    </div>
  )
}

export default Login