import React,{useState} from 'react'
import './Navbar.css'
import logo from './logo/logo.png'
import { FiMenu } from "react-icons/fi";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p>DEVINCE</p>
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Services</li>
        <li>Workflow</li>
        <li>Team</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <FiMenu className="menuicon" onClick={toggleMenu} />
    </div>
  )
}

export default Navbar