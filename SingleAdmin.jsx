import ic0 from '../images/icons/content.png'
import ic1 from '../images/icons/instructor.png'
import ic2 from '../images/icons/duration.png'
import ic3 from '../images/icons/free.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Showstudents from './Showstudents'

function SingleAdmin(props) {

    const[shown,setShwon]=useState(false)
    const handle =event=>{
setShwon(current=>!current)
    }
    // const [id,setId]=useState("")
    // const Deletews = () => { 
    //     alert("abl")
    //     axios.get(`http://localhost:5000/deletecourse/${props.course}`).then((res) => {
    //         console.log(res.data);
    //         alert("The course is deleted succefully")
    //         window.location.href="/Editws"
    //     })
    // }
    const Deletews = () => { 
        axios.get(`http://localhost:5000/deletecourse/${props.course}`).then((res) => {
            console.log(res.data);
            alert(res.data)
            window.location.href="/Editws"
        })
    }
    

    // const sendId=(id)=>{
    //  setId(id)
    //  Deletews()
    // }

  
   
    const [all, setAll]= useState([])
    const getallcourses=()=>{
    axios.get("http://localhost:5000/all").then((res)=>{setAll(res.data);})
    console.log(all[8])
    //   alert(JSON.stringify( all[8]))
    }
useEffect(()=>{getallcourses();},[]);



return (
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
                    <div className='icon'> <img src={ic0} /></div>
                    <a href={props.content} target="_blank">View Content</a>
                </div>

                <div className='line'>
                    <div className='icon'> <img src={ic1} /></div>
                    <p dir="rtl"> {props.instructor}</p>
                </div>

                <div className='line'>
                    <div className='icon'> <img src={ic2} /></div>
                    <p dir="rtl">{props.date}</p>
                </div>

                <div className='line'>
                    <div className='icon'> <img src={ic3} /></div>
                    <p dir="rtl">{props.free}</p>
                </div>


            </div>

         <button onClick={Deletews}>Remove</button>
         <button onClick={handle}>Show Students</button>
         {/* <Link to={"/Showstudents"}> <button >Show Students</button> </Link> */}
       


        </div>
        <div className='imgs'>
            <img src={props.imgs} />
            { shown && <Showstudents course={props.course}/>
}
        </div>


    </div>
)
}
// handle=()=>{
//     sendId(id)
// }
export default SingleAdmin