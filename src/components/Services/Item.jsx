import React from 'react'
import './Item.css'

function Item(props) {
  return (
    
    <div className='item'>
    
        <div className="item-content">
            <img className='item-img' src={props.img} alt={props.title}/>

        </div>
        <div className="text">
            <h2>{props.title}</h2>
            {/* <div className="text1"> */}
            <p>{props.description}</p>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Item