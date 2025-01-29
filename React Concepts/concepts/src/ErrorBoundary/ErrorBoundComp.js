import React, { Component } from 'react'

 class ErrorBoundComp extends Component {
    constructor(props){
        super(props)
        this.state={
            isCond:false
        }
        }

        static getDerivedStateFromError(){
            return {
                isCond:true
            }
        }
        componentDidCatch(error)
        {
         console.log("Invalid username")
        }
        
    
    render() {
        if(this.state.isCond)
        {
            return <h2>AnError occurred</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundComp


