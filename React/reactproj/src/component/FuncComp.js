import React from "react"
const FuncComp= (props)=>{
    return(
        <div>
            <h2>
                This is function Component
            </h2>
            <p>
            My name is <strong>{props.fname}</strong> working in the <strong>{props.department}</strong> 
            sector as <strong>{props.role}</strong>.
            </p>

        </div>
    );
    

    } 

export default FuncComp;