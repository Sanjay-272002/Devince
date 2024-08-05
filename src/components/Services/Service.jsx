import React from 'react'
import './Service.css'
import { serviceContents } from './Servicecontent'
import Item from './Item'
// import serviceContents  from './Servicecontent'



function Service() {
  return (
    <div className='servicvemain'>
        <div className="service">
            Services
        </div>
        <div className="service-content">

      
          {
            serviceContents.map((item,i)=>{
           return(
                <Item key={i} id={item.id} img={item.img} title={item.title} description={item.description}> </Item>

            )
            })

            }
              </div>
          
    
    
    </div>
  )
}

export default Service