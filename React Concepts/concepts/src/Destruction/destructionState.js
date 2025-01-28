import React, { Component } from 'react'

class DestructStateComp extends Component {
     constructor(){
        super()
     this.state={
        Name:"selva balaji",
        age:"22"
     }
     }
    render() {
        const{Name,age}=this.state
        return (
            <div>
                <p>My name is {Name} and {age} years old</p>
            </div>
        )
    }
}
export default DestructStateComp
