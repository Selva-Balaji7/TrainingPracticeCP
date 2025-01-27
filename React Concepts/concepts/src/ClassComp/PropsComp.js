import React, {Component} from "react"
class PropsComp extends Component{
    constructor(props)
    {
     super(props)
     this.state={
        name:this.props.name,
        company:this.props.company
     }
    }


    changeName=()=>{
        this.setState({
            name:"tharunbalaji",
            company:"tcs"
        })
    }

    

    render(){
        return(
          <>
          
          <p style={{display:"inline",cursor:"pointer",backgroundColor:"aqua",margin:0,padding:0}} onMouseOver={this.changeName}>I am {this.state.name} and i working as trainee in software development at {this.state.company} </p>
          

          </>
        )
    }

}
export default PropsComp