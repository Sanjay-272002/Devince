import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Service from './components/Services/Service.jsx'
import Workflow from './components/Workflow/Workflow.jsx'
import Contact from './components/Contact/Contact.jsx'
import Whyus from './components/Whyus/Whyus.jsx'
import Footer from './components/Footer/Footer.jsx'
import Banner from './components/Banner/Banner.jsx'
import './App.css'
import TechStack from './components/TechStack/TechStack.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phno:'',
    email: '',
    reqser:'',
    message: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', formData);
   
    setFormData({
      name: '',
      email: '',
      phno:'',
      reqser:'',
      message: ''
    });
  };
  return (
    <div>
        <Navbar/>
      <button className="get-quote-button" onClick={openModal}>
        Get Quote
      </button> 
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <h2>Get Quote</h2>
            <div className="contact-input">
        <div className="con">
          <input
            className="name box1"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          /><br />
           <input
            className="name box1"
            type="text"
            name="phno"
            placeholder="Phone Number"
            value={formData.phno}
            onChange={handleChange}
          /><br />
          <input
            className="email box1"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /><br />
           <input
            className="email box1"
            type="text"
            name="reqser"
            placeholder="Required Service"
            value={formData.reqser}
            onChange={handleChange}
          /><br />
          <input
            className="message box1"
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          /><br />
          <button
            className="send-button box1"
            type="button" 
            onClick={handleSubmit}
          >
            Get Quote
          </button>
        </div>
      </div>
          </div>
        </div>
      )}
   
    <div className="App">
       <Banner/> 
      <About/>
      <Service/>
      <Workflow/>
      <TechStack/>
      <Whyus/>
      <Contact/>
      
      <Footer/>
      </div>
   
    </div>
  )
}

export default App
