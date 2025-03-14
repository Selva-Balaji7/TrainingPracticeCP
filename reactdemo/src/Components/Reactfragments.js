import React, { Component } from 'react'

export default class Reactfragments extends Component {
  render() {
    return (
        <div>
           <h2>
             <Childfragment/>
           </h2>
        </div>
    )
  }
}

class Childfragment extends Reactfragments {
  render(){
    return(
      <>
         This is react fragments
      </>
    )
  }
}

