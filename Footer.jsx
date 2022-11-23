import React from 'react'
import "./Footer.css"
import logo from '../images/beta logo.png'
import facebook from '../images/icons/facebook.png'
import instagram from '../images/icons/instagram.png'
import linkedin from '../images/icons/linkedin.png'
import location from '../images/icons/location.png'
import phone from '../images/icons/phone.png'
import gmail from '../images/icons/gmail.png'
function Footer() {
  return (
    <div>
<footer class="footer-distributed">

      <div class="footer-left">
<img src={logo} alt="logo here" />
        

       

        <p class="footer-company-name">Beta © 2017</p>
      </div>

      <div class="footer-center">

        <div className='x'>
          <img src={location} alt="" />
          <p> 19 Gaber Ibn-Hayan st, Dokki, Cairo, Egypt</p>
        </div>

        <div className='y'>
        <img src={phone} alt="" />
          <p>01120127810</p>
        </div>

        <div className='z'>
        <img src={gmail} alt="" />
          <p>betaacademy18@gmail.com</p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About Beta</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="https://www.linkedin.com/company/beta-training-academy/" target="_blank"> <img src={linkedin} alt="" /></a>
          <a href="https://www.instagram.com/beta_academy18/" target="_blank"> <img src={instagram} alt="" /></a>
          <a href="https://www.facebook.com/BetaAcademy.B/?ref=page_internal" target="_blank"> <img src={facebook} alt="" /></a>
          <a href="https://maps.app.goo.gl/JHpvyxytKrT9pupJ9" target="_blank"> <img src={location} alt="" /></a>

        </div>

      </div>

    </footer>
    </div>
  )
}

export default Footer