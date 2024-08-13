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
       <Banner/> 
      <About/>
      <Service/>
      <Workflow/>
      <Whyus/>
      <Contact/>
      
      <Footer/>
      </div>
   
    </div>
  )
}

export default App
