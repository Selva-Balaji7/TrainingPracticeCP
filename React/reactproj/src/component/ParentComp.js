import { Component, Fragment } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import MemoComp from "./MemoComp";
class ParentComp extends Component{

    constructor(props){
        super();
          this.state={
            empName:"selva balaji",
            empSal:90000
          }
    }

          changeStateData=()=>{
            console.log("hi");
            this.setState({empName:"Selva S",empSal:this.state.empSal+5000});

    }

    render(){
        const {empName,empSal}=this.state;//destructuring of state
        const {gender,contact}=this.props;//destructuring of props
        return (
        <Fragment>
             <h2>This is ParentComp component</h2>
             {/* <p>My myname is <strong>{this.state.empName}</strong> I am: <strong>{this.state.empSal}</strong></p> */}
             <p>Name:<strong>{empName}</strong>, Salary:<strong>{empSal}</strong></p>
             {/* <p>Gender:<strong>{this.props.gender}</strong>,Contact:<strong>{this.props.contact}</strong></p> */}
             <p>Gender:<strong>{gender}</strong>, Contact:<strong>{contact}</strong></p>

             <button type="button" className="btn btn-primary" onClick={()=>this.changeStateData()}>change state</button><br></br>
        <ChildComp name={empName} sal={empSal} manageState={this.changeStateData}></ChildComp>
        <MyPureComp empName={empName}></MyPureComp>
        <hr></hr>
        <MemoComp empName={empName}></MemoComp>


        </Fragment>
        )
    }



}
export default ParentComp;