import React, { useEffect } from 'react'
import { useRef } from 'react'

const UseRefComp = () => {
 const uname=useRef(); //uname ={current:null}
 useEffect(()=>{
    console.log(uname);
    
 },[])
 
 const handleChange=()=>{
    document.title=`this is onclick event`
    console.log(`the current updated value is:${uname.current.value}`);
 }

    return (
        <div>
           
            <label>Enter name:</label>
             <input type="text" ref={uname}  ></input>
             <button className="btn btn-danger" onClick={handleChange}>click me!</button>
        </div>
    )
}
export default UseRefComp
