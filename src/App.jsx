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
function App() {
 

  return (
    <div>
        <Navbar/>
    <div className="App">
         <div className='banner'>
         <div className='c1'>
            
         <div className='content'> 
           
        <p className='p1'>DIWEGO-Transforming Digital Products</p>
        <p className='p2'>Freelance developer and designer</p>
        <button className='button'>Get in touch</button></div>
        
         </div> 
    </div>
  
      
      <About/>
      <Service/>
      <Workflow/>
      <Contact/>
      <Whyus/>
      <Footer/>
      </div>
   
    </div>
  )
}

export default App
