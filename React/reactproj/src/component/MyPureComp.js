import reacts, { Component, PureComponent } from "react";
class MyPureComp extends PureComponent{

 render(){
     console.log("mypure-comp render");
     return (

        <div>
            <h2>This my Pure Component</h2>
            <p>Name:{this.props.empName}</p>
        </div>

     )

 }
}
export default MyPureComp;