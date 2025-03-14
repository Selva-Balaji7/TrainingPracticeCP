import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
     constructor(props){
         super(props)
         this.state={
             empName:"selva s",
             empSal:50000
         }
     }

     changeState=()=>{
         this.setState({
             empName:"Selva balaji",empSal:this.state.empSal+50000
         })

     

      
     }
  render() {
      const {gender,contact}=this.props
      const {empName,empSal}=this.state
    return (
      <div>
          <h2>This is parent component</h2>
          <p>The gender is {gender} and contact:{contact}</p>
          <ChildComp name={empName} sal={empSal} managestate={this.changeState}></ChildComp>
         
      </div>
    )
  }
}
