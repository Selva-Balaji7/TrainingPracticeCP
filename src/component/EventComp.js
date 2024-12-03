import React, {Component} from 'react'
class EventComp extends Component{
    greeting=()=>{
        window.alert("hello everyone");
    };
    welcome=(...std)=>{
        window.alert(`welcome you $(std)`);
    };
    render(){
        return(
            <div>
                <h2>this is event components</h2>
            <button type="button"  onClick={()=>this.greeting()}>call greeting</button>
            <button type="button"  onClick={()=>this.welcome("Tarun","Vinay")}>call welcome</button>
            <h2 onMouseOver={()=>this.welcome("Madhav","Rahul","Rupesh")}>Hover on me to call welcome</h2>
            </div>
        )

    }
}
export default EventComp