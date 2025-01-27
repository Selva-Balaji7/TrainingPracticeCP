import React,{Component} from 'react'
class SampleClassComp extends Component{
    constructor(){
     super()
     this.state={
        name:"selva",
        age:21
     }
    }

     ChangeName=()=>{
        console.log("this changeName method")
        this.setState({
           name:"balaji",
           age:22,
            
        });
    }
    render(){
        return(
            <>
             <p>My name is {this.state.name} and i am {this.state.age} years old </p>     
             <button type="button" className="btn btn-primary" onClick={this.ChangeName}>Update</button>       
            </>
        )
    }
}
export default SampleClassComp