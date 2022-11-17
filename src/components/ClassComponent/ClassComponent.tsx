import React from "react"



class ClassComponent extends React.Component {
    constructor(props:any){
        super(props)
        console.log("construtor reached")
    }
state ={
    name: "mundo"
}


componentDidMount(){
     console.log("did mount reached")
    
}
render(){
    console.log("redner reached")
    return <div>
    <p>name: {this.state.name}</p>
        <button onClick={()=>{this.setState({name:"valdine"}
            )}}>click me</button>
        </div>
    
}
}


export default ClassComponent