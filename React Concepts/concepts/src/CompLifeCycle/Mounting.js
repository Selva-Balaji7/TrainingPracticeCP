import React, { Component } from 'react'
import ChildMountComp from './childMounting';


class MountingComp extends Component {
     constructor(props)
     {
      super(props)
      this.state={
         name:'selva balaji'
      }
        console.log("lifecycle A constructor");
     }

     static getDerivedStateFromProps(props,state){
        console.log("lifecycle A getDerivedStateFromProps");
        return null
     }

     componentDidMount(){
        console.log("lifecycle A componentDidMount")
     }
    render() {
      console.log("lifecycle A render method")
        return (
            <div>
               <p>This is lifecycle A rendering component</p> 
               <ChildMountComp></ChildMountComp>

            </div>
        )
    }
}

export default MountingComp
