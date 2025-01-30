import React, { Component } from 'react'

class ChildUpdateComp extends Component {
     constructor(props)
     {
      super(props)
      this.state={
         name:'selva balaji'
      }
        console.log("update lifecycle B constructor");
     }

     static getDerivedStateFromProps(props,state){
        console.log("update lifecycle B getDerivedStateFromProps");
        return null
     }

       shouldComponentUpdate(nextProps, nextState){
        console.log("update lifecycle B shouldComponentUpdate");
        return true;
     }

     
     getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("update lifecycle B getSnapshotBeforeUpdate");

     }

     componentDidUpdate(prevProps, prevState, snapshot){
        console.log("update lifecycle B componentDidUpdate")
     }

    render() {
      console.log("update lifecycle B render method")
        return (
            <div>
               <p>This is lifecycle B rendering component</p> 
            </div>
        )
    }
}

export default ChildUpdateComp
