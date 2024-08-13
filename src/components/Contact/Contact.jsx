import React from 'react'
import './Contact.css'
import contact from './contactimage/contact.jpeg'

function Contact() {
  return (
   <div className="contact-main">
     <div className="contact">
        Contact
    </div>
    <div className="contact-input">
        
        <div className="c">
        <input className="name box" type="text" placeholder="Name"/><br/><input className="email box" type="email" placeholder="Email"/><br/>
        <input className="message box" type="text" placeholder="Message"/><br/>
        <button className="send-button box">Send message</button>
        </div>
    </div>
   </div>
  )
}

export default Contact