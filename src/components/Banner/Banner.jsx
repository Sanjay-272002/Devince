import React from 'react'
import './banner.css'
import banner from './bannerimage/banner.png'
import { Typewriter } from 'react-simple-typewriter';

function Banner() {
  return (

    <div className='banner'>
         <div className='c1'>
         <div className='content'>     
        <p className='p1'>DEVINCE- Transforming Ideas into Digital Products</p>
        <p className='p2'>Freelance Developers</p>
        <button className='button'>Get in Touch</button></div>    
         </div> 
    </div>
  )
}

export default Banner