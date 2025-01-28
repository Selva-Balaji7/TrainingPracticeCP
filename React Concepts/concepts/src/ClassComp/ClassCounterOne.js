import React, {Component} from 'react'
import MyPureComp from '../PureComp.js/MyPureComp'
import EventtargetComp from '../EventTargetExample/type-1'
class ClassCounterOneComp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title=`Clicked ${this.state.count} times`
    }

    render(){
        return (
            <>
            <button onClick={()=>this.setState({count:this.state.count+1})}>click {this.state.count} times</button>
            <MyPureComp></MyPureComp>
            <EventtargetComp></EventtargetComp>
            </>
        )
    }


}
export default ClassCounterOneComp