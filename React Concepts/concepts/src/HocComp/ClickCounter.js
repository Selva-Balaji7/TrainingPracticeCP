import { Component } from "react";
import MyHocComp from "./MyHocComp";
class ClickCounterComp extends Component{
    constructor(props){
        super(props)
        // this.state={
        //     count:0,
        // }
    }

    // IncreaseData=()=>{
    //     this.setState({
    //      count:this.state.count+1

    //     });

    // }

    render(){
        const {count,incrementCount}=this.props
        return(
            <>
            <h2>This is click counter component</h2>
             <p>counter value is:{count}</p>
             <button type="button" className="btn btn-primary" onClick={incrementCount}>click me</button>
            </>

        )

    }
}
 //export default ClickCounterComp;
export default MyHocComp(ClickCounterComp);










