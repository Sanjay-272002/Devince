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

function App() {
 

  return (
    <>
      <Navbar/>
      <About/>
      <Service/>
      <Workflow/>
      <Contact/>
      <Whyus/>
      <Footer/>
    </>
  )
}

export default App
