import { Component } from "react";
class HoverCounterComp extends Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }

    IncreaseData=()=>{
        this.setState({
         count:this.state.count+1

        });

    }

    render(){
        return(
            <>
             <p>counter value is:{this.state.count}</p>
             <button type="button" onMouseOver={this.IncreaseData}>Hover on me</button>
            </>
        )

    }
}
export default ClickCounterComp;










