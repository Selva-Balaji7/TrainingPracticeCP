import React,{Component} from "react";
class ClassComp extends Component {
    render(){
        return (
        <div>
             <h2>This is class component</h2>
             <p>My myname is <strong>{this.props.fname}</strong> I am working as <strong>{this.props.post}</strong>
             in <strong>{this.props.company}</strong> organization
             </p>

        </div>
       
        );
    }
}
export default ClassComp;