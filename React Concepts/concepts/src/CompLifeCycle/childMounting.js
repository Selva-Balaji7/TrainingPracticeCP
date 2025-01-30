import React, { Component } from 'react'

class ChildMountComp extends Component {
     constructor(props)
     {
      super(props)
      this.state={
         name:'selva balaji'
      }
        console.log("lifecycle B constructor");
     }

     static getDerivedStateFromProps(props,state){
        console.log("lifecycle B getDerivedStateFromProps");
        return null
     }

     componentDidMount(){
        console.log("lifecycle B componentDidMount")
     }
    render() {
      console.log("lifecycle B render method")
        return (
            <div>
               <p>This is lifecycle B rendering component</p> 
            </div>
        )
    }
}

export default ChildMountComp
