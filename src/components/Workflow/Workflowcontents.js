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
        description:"Designing user interfaces and experiences using Figma.",
    },
    {
        id: 4,
        img:dev,
        title:"Development",
        description:"Building the application with clean and efficient code.",

    },
    {
        id: 5,
        img:testing,
        title:"Testing",
        description:"Thoroughly testing the application to ensure it is bug-free."
    },
    {
        id: 6,
        img:host,
        title:"Hosting",
        description:"Deploying the application to a production environment",
    },
    {
        id: 7,
        img:maintanance ,
        title:"Maintenance",
        description:"Providing ongoing support and maintenance for the application.",
    }
]