import React,{Component} from 'react';

class MystateComp extends Component{
    
    constructor(){
        super();
     this.state={
       empName:"selva",
       empSal:100000
     }
    }

     ChangeState=()=>{
        this.setState(
            {empName:"balaji",empSal:this.state.empSal+100000}
        );

     }

     render(){
     return(
        <div>
               <h2>This is the State property</h2>
                <p>Employee name is <strong>{this.state.empName}</strong></p> and my current salary is
                  <strong>{this.state.empSal}</strong><br/>
                <button type="button" className="btn btn-primary" onClick={()=>this.ChangeState()}>change data</button>
    
        </div>    

     )
        
    }
    
}
    export default MystateComp;

















/*import React, {Component} from 'react'
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
              <p>Employee Name:<strong>{this.state.empName}</strong> and Salary {this.state.empSal}</p>
              <button type='button' class='btn btn-primary' onClick={()=>this.changeStateData()}>change data</button>
            </div>
        )
    }
}
export default MyStateComp;*/