import React from 'react'
import { workflowContents } from './Workflowcontents'
import Item from '../Services/Item'
import './Workflow.css'

function Workflow() {
  return (
    <div className="workflow-main">
        <div className="workflow">
            Workflow
        </div>
        <div className="workflow-content">
        {
            workflowContents.map((item,i)=>{
           return(
                <Item key={i} id={item.id} img={item.img} title={item.title} description={item.description}> </Item>

            )
            })

            }

        </div>
    </div>
  )
}

export default Workflow