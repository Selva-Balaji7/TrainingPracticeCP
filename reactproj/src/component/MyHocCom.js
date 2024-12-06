import React from 'react'
import { Component } from 'react'
const MyHocComp=(WrapperComp)=>{

    class Hoc extends Component{
        constructor(props) {
            super(props)
            this.state={
                count:0
            }
        }
            incrementCount=()=>{
                this.setState((prevState)=>({count:prevState.count+1}));
            }
        
            render(){
                return<WrapperComp count={this.state.count} incrementCount={this.incrementCount}></WrapperComp>
            }
    
    
}
return Hoc;
}
export default MyHocComp;