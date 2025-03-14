import React, { Component } from 'react'
class ClassComp extends Component{
         constructor(props){
             super(props)
             this.state={
                name:"selva",
                age:22
             }
             //this.ChangeData = this.ChangeData.bind(this);
         }

        ChangeData=()=>{
           this.setState(()=>({name:"ajay",age:"24"}))
       }
  render() {
    return (
      <div>
          <h2>My name is {this.state.name} and i am {this.state.age} years old  and working as {this.props.role}</h2>
          <button className='btn btn-primary' onClick={(()=>this.ChangeData())}>change data</button>
        
      </div>
    )
  }
}
export default ClassComp;

