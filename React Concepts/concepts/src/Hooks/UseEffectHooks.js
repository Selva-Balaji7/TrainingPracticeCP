import { useState,useEffect } from "react";

const UseEffectHookComp=()=>{

    const[age,setAge]=useState(19);
    const[sal,setSal]=useState(50000);
  
    //case 1: no dependency value
    // useEffect(()=>{
    //  setAge(age+1)
    // })

    //case 2:when we pass dependencies values as blank array
// useEffect(()=>{
//     setAge(age+1);
// },[])

    //case 3:when we have to execute useEffect hook as we want 
    useEffect(()=>{
        setAge(age+1)
    },[sal])
    return(

         <div>
            <p>your age:{age}</p>
            <p>your sal:{sal}</p>
            <button className="btn btn-primary" onClick={()=>setSal(sal+20000)}>change salary</button>
         </div>
    )
}
export default UseEffectHookComp;