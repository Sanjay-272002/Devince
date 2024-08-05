import React from 'react'
import './Item.css'

function Item(props) {
  return (
    
    <div className='item'>
    
        <div className="item-content">
            <img className='item-img' src={props.img}/>

        </div>
        <div className="text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>

    </div>
    
  )
}

export default Item