import ic0 from '../images/icons/content.png'
import ic1 from '../images/icons/instructor.png'
import ic2 from '../images/icons/duration.png'
import ic3 from '../images/icons/free.png'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Form from './Form'

function Single(props){
    const[shown,setShwon]=useState(false)
    const handle =event=>{
setShwon(current=>!current)
    }
    return(

       
        <div className="single">
        <div className='txt'>
            <div className='intro'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            </div>

            <p dir="rtl">{props.desc1}</p>
            <p dir="rtl">{props.desc2}</p>

            <div className='lines'>
            <div className='line'>
            <div className='icon'> <img src={ic0}/></div>
            <a href={props.content} target="_blank">View Content</a>
            </div>

            <div className='line'>
            <div className='icon'> <img src={ic1}/></div>
            <p dir="rtl"> {props.instructor}</p>
            </div>

            <div className='line'>
            <div className='icon'> <img src={ic2}/></div>
            <p dir="rtl">{props.date}</p>
            </div>

            <div className='line'>
            <div className='icon'> <img src={ic3}/></div>
            <p dir="rtl">{props.free}</p>
            </div>


            </div>
           
            {/* <Link to={"/Form"}><button >{props.user}</button></Link> */}
<button onClick={handle}>Enrol Now!</button>


        </div>
        <div className='imgs'>
            <img src={props.imgs}/>
            { shown && <Form course={props.course}/>
}
        </div>
      
        </div>
    
    )
}
export default Single