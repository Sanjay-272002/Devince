import React from 'react'
import './Navbar.css'
import logo from './logo/logo.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo"/>
            <p>DiWego</p>
        </div>
        <ul className="menu">
            <li>Home</li>
            <li>Services</li>
            <li>Workflow</li>
            <li>Team</li>
            <li>Portfolio</li>
            <li>Contact</li>
            </ul>
                {/* <div className="profile">
                    <img src="" alt="pic"/>
                </div> */}
            
        
    </div>
  )
}

export default Navbar