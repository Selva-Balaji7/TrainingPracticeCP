import React,{useState} from 'react'

 const ConditionalComp = () => {
    const[isCond]=useState("true");
    let msg="";
    // 1. if-else
    // if(isCond)
    // {
    //     msg="admin login successfully"
    // }
    // else{
    //     msg="Invalid login"
    // }
    // method -2
    // if(!isCond)
    // {
    //     return<h1>login successfully</h1>
    // }
    // else{
    //     return<h1>login failed</h1>
    // }
    //3.ternary operator
    //(isCond)?msg="you are pass":msg="you are fail"

    //4.short circuit condition
    msg=(isCond) && <h1>condition satisfied</h1>
    return (
        
        (isCond) &&
                
                    <div>
                    <p>"admin login successfully"</p>
                    </div>
                
            // <p>{msg}</p>
    );
}
export default ConditionalComp
