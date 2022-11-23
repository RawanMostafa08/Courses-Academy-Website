import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Workshops from './Workshops'
import Register from './Register'
import logo from '../images/beta logo.png'
function Navbar() {
  const dest=()=>{
// localStorage.clear()
    if(localStorage.getItem("user"))
    {
    window.location.href="/Adminws"
   
    }else
    window.location.href="/Login"
    
      }
  
  return (
    
    <div className='Navbar'>
        <img src={logo} alt="logo" />
     <h1>Beta</h1>
     <ul>
       <li><Link to={"/"}>Home</Link> </li>
        <li><Link to={"/About"}>About</Link> </li>
        
        <div class="dropdown">
        <li>Workshops
  <div class="dropdown-content">
     <Link  to={"/Workshops"}>Student</Link> 
       <Link  to={"#"} onClick={dest}>Admin</Link> 
     

   
  </div>

        </li>
        </div>

        {/* <li><Link to={"/Register"}> Register</Link></li> */}
      
     </ul>
  
    </div>






    
  )
}

export default Navbar