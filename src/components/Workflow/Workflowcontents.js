import collect from './workflowimages/collectingrequiremnts.png'
import dev from './workflowimages/dev.jfif'
import host from './workflowimages/host.png'
import maintanance from './workflowimages/maintanance.jfif'
import testing from './workflowimages/testing.png'
import uiux from './workflowimages/uiux.png'
import usecase from './workflowimages/usecase.png'

export const workflowContents=[
    {
        id: 1,
        img:collect,
        title:"Collecting Requirements",
        description:"Understanding the project goals,audience and competition to inform the creative direction",

    },
    {
        id: 2,
        img:usecase,
        title:"Documenting Usecases",
        description:"Developing initial ideas through rough sketches and exploring different visual concepts",
    },
    {
        id: 3,
        img:uiux,
        title:"UI/UX Wireframe Designs",
        description:"Definig the color palette,typiography and overall style to align with thembrand and message",
    },
    {
        id: 4,
        img:dev,
        title:"Development",
        description:"Creating detailed designs with attention to composition,detail and narrative",

    },
    {
        id: 5,
        img:testing,
        title:"Testing",
        description:"Refinig the designs,adding texture,shading and refinig line work for a polished finish,"
    },
    {
        id: 6,
        img:host,
        title:"Hosting",
        description:"Sharing the designs with the client for review,gathering feedback and making revisions as needed",
    },
    {
        id: 7,
        img:maintanance ,
        title:"Maintenance",
        description:"Applying any final adjustments or additional elements to enhance the desing and ensure it meets the client's expectations",
    }
]