import React from "react"
import ReactDOM from "react-dom/client"

const elem=<span>React element</span>

const Title=()=>(
    
        <h1 className="title">This is title component</h1>
    
)

const HeadingComponent=()=>(
    <div id="container">
        <Title />
        <h1 className="heading">This  {elem} is function component</h1>
    </div>
)
    
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)