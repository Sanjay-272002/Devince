import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="" alt="Logo"/>
            <p>HustleCoders</p>
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