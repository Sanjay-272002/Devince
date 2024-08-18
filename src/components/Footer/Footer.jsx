import React,{ useEffect } from 'react'
import './footer.css'
import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Footer() {
  
  return (
   <div className="footer-main">
    <div className="footer">
      <ul className='footer-menu'>
        <li>About</li>
        <li><a href='#servicediv'>Services</a></li>
        <li><a href='#workflowdiv'>Workflow</a></li>
        <li>Team</li>
        <li>Portfolio</li>
        <li><a href='#contactdiv'></a>Contact</li>
      </ul> 
    </div>
    <div className="footer-icons">
        <li><FaTwitter /></li>
          <li><FaInstagram /></li>
          <li><FaFacebook /></li>
        </div>
       <div className="mail">
        <FaEnvelope />
        <p>contactdevince@gmail.com</p>
       </div>
   </div>
  )
}

export default Footer
