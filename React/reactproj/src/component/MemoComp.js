import React from 'react'

 const MemoComp=(props)=>{
     console.log("memo-comp render");
     return (

        <div>
            <h2>This is Memo Component</h2>
            <p>Name:{props.empName}</p>

        </div>

     )

 }
export default MemoComp;