import React from 'react'

//function component
const MyNameComp = (props) => {
    return (
        <div>
          <h2>This is MyName Component</h2>
          <p>My Name is:{props.name}</p>  
          <p>I am:{props.post}</p>  
        </div>
    )
}

export default MyNameComp
