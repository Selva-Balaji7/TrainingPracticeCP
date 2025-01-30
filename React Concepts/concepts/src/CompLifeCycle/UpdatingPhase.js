import React, { Component } from 'react'
import  ChildUpdateComp from './ChildUpdate';
 './childMounting';


class UpdatingPhaseComp extends Component {
     constructor(props)
     {
      super(props)
      this.state={
         name:'selva balaji'
      }
        console.log("update lifecycle A constructor");
     }
     ChangeState(){
        this.setState({
            name:"tharun balaji"
        })
     }

     static getDerivedStateFromProps(props,state){
        console.log("update lifecycle A getDerivedStateFromProps");
        return null
     }
      
     shouldComponentUpdate(nextProps, nextState){
        console.log(" update lifecycle A shouldComponentUpdate");
        return true;
     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("update lifecycle A getSnapshotBeforeUpdate");

     }
     componentDidUpdate(prevProps, prevState, snapshot){
        console.log("update lifecycle A componentDidUpdate");
     }


    


    render() {
      console.log("lifecycle A render method")
        return (
            <div>
               <p>This is lifecycle A rendering component</p> 
               <button onClick={this.ChangeState}>change state</button>
               <ChildUpdateComp></ChildUpdateComp>

            </div>
        )
    }
}

export default UpdatingPhaseComp
