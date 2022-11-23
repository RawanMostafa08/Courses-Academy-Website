import React from 'react'
import "./About.css"
import team from '../images/clark.jpg'
import video from '../images/y2mate.com - Little Things That Matter  1 Minute Nature Video_1080p.mp4'
function About() {
  return (
    <div className='about'>
      <div className='intro_image'> </div>
      <h1 className='about_us'>ABOUT US</h1>
<div className='story'>

<h1 className='our_story'>OUR STORY</h1>

<p className='story'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Assumenda dolores nulla id vitae, voluptas fuga perferendis non doloremque eos in,
  earum nihil! Voluptates autem repellendus consequuntur eligendi. Quisquam, assumenda pariatur?</p>

<video className='vid'   controls src={video}>
   yes</video>
</div>

<div className='our_vision'>
<div className='vision'>
<h1 className='vis'> VISION</h1>

</div>
<div className='vision_words'>
<h1 className='vision_title'> OUR VISION</h1>
<hr  />
<p className='vision_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur. Non cupiditate nemo magni modi aspernatur, voluptate vitae, facilis necessitatibus, tempore corrupti dicta. Magni fuga dolores vero amet architecto corrupti!</p>

</div>





</div>
<div className='our_vision'>
<div className='vision'>
<h1 className='vis'> MISSION</h1>

</div>
<div className='vision_words'>
<h1 className='vision_title'> OUR MISSION</h1>
<hr  />
<p className='vision_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur. Non cupiditate nemo magni modi aspernatur, voluptate vitae, facilis necessitatibus, tempore corrupti dicta. Magni fuga dolores vero amet architecto corrupti!</p>

</div>

</div>




<div className='our_team'>

<h1 className='words'>OUR TEAM</h1>
<img src={team} alt=" our team" />




</div>





    </div>






  )
}


export default About 