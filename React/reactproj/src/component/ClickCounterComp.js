import { Component } from "react";
import MyHocComp from "./MyHocCom";
class ClickCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0,
    //     }
    // }

    // IncreaseData=()=>{
    //     this.setState({
    //      count:this.state.count+1

    //     });

    // }

    render(){
        return(
            <>
            <h2>This is click counter component</h2>
             <p>counter value is:{this.props.count}</p>
             <button type="button" className="btn btn-primary" onClick={this.props.incrementCount}>click me</button>
            </>

        )

    }
}
//export default ClickCounterComp;
export default MyHocComp(ClickCounterComp);










