import React, {Component} from 'react'
class MyStateComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"selva",
            empSal:85000
        }
    }
changeStateData=()=>{
    this.setState({empName:"balaji",empSal:this.state.empSal+95000});
    //this.setState((prevState)=>({empName:"Selva S",empSal:prevState.empSal+5000}));
}


    
    render(){
        return(
            <div>
              <h2>this MystateComp</h2>
              <p>Employee Name:<strong>{this.state.empName}</strong>and Salary {this.state.empSal}</p>
              <button type='button' class='btn btn-primary' onClick={()=>this.changeStateData()}>change data</button>
            </div>
        )
    }
}
export default MyStateComp;