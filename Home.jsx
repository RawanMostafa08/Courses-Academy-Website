import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import introimg from '../images/intro.jpg'
import dmax from '../images/3dmax.jpg'
import autocad from '../images/autocad.jpg'
import c from '../images/c++.jpg'
import marketing from '../images/marketing.jpg'
import matlab from '../images/matlab.jpg'
import instructors from '../images/7-reasons-to-include-instructor-led-training-in-your-online-training.webp'
import feedb1 from '../images/304774754_2329594770530418_9086665551212031111_n.jpg'
import feedb2 from '../images/305029910_2329593537197208_453802322885491040_n.jpg'
import feedb3 from '../images/304781809_2329594573863771_5925757465727954666_n.jpg'
import feedb4 from '../images/1 (2).jpg'
import feedb5 from '../images/1 (3).jpg'
import feedb6 from '../images/1 (1).jpg'
function Home() {
  return (
    <div className='herohome'>
      <div className='intro1'>
        <img src={introimg} alt="intoimg" />
        <p>
          <h1> Introduction</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias cupiditate pariatur velit quas dignissimos dolorem incidunt vero cumque, inventore cum hic minus deleniti optio dolorum sint quisquam ab praesentium neque?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati officiis sed quo hic earum reiciendis maiores alias inventore quaerat, asperiores iste ipsum distinctio, ipsam consequuntur ullam, ea dicta ipsa a?
        </p>
      </div>
    

      <div className='courses'>
        <div className='word'>
          <h2>Workshops</h2>
        </div>
        <div className='imgs1'>
          <img src={dmax} alt="img here" />
          <img src={autocad} alt="img here" />
          <img src={c} alt="img here" />
          <img src={marketing} alt="img here" />
          <img src={matlab} alt="img here" />
          <button><Link to={"/Workshops"}>Show More</Link> </button>

        </div>


      </div>
      <div className='instructors'>
        <div className='first'>
          <p>
            <h2>Our Instructors</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quia! Asperiores consectetur aspernatur officia quo, mollitia id, nemo dicta cumque eveniet, voluptatem nesciunt sunt maiores! Atque ratione repellendus obcaecati consequuntur.
          </p>
          <img src={instructors} alt="img here" />

        </div>
      </div>


      <div className='feedb'>
        <div className='word'>
          <h2>Students Feedback</h2>
        </div>
        {/* <div className='imgss'>
<img src={feedb1} alt="img here" />
<img src={feedb2} alt="img here" />
<img src={feedb3} alt="img here" />
<img src={feedb4} alt="img here" />
<img src={feedb5} alt="img here" />
<img src={feedb6} alt="img here" />
<div className='overlay'>
  <p>
  Beta is a great academy <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat obcaecati accusamus? Quo laborum repellendus
  </p>
  </div> */}





        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div>
                 <img class="content-image" src={feedb1}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam"</p>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div> <img class="content-image" src={feedb2}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam" </p>
                  </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div> 
                <img class="content-image" src={feedb3}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam"</p>
                  </div>
               </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div> <img class="content-image" src={feedb4}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam"</p>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div> <img class="content-image" src={feedb5}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam"</p>
                  </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="content">
                <div class="content-overlay"></div> 
                <img class="content-image" src={feedb6}/>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">"Beta is a great academy"</h3>
                    <p class="content-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis quam ex nobis sapiente ea! Consectetur magnam"</p>
                  </div>
               </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Home