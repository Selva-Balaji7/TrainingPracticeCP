import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffectHookComp=()=>{

//     const[age,setAge]=useState(19);
//     const[sal,setSal]=useState(50000);
  
//     //case 1: no dependency value
//     // useEffect(()=>{
//     //  setAge(age+1)
//     // })

//     //case 2:when we pass dependencies values as blank array---->Mounting(componentDidMount)
// useEffect(()=>{
//     setAge(age+1);
// },[])

//     //case 3:when we have to execute useEffect hook as we want ---->Updating(componentDidUpdate)
//     // useEffect(()=>{
//     //     setAge(age+1)
//     // },[sal])
//     // return(

//     //      <div>
//     //         <p>your age:{age}</p>
//     //         <p>your sal:{sal}</p>
//     //         <button className="btn btn-primary" onClick={()=>setSal(sal+20000)}>change salary</button>
//     //      </div>
//     // )

//     //case4:cleaning up the effects -----> Unmounting(componentWillUnmount)

    const [seconds, setSeconds]=useState(0);
        useEffect(()=>{
            console.log('rendering comp')
        const interval=setInterval(()=>{
         setSeconds(prev=>prev+1);
         console.log("running interval")
    },1000);
     //cleans up unmount
     return()=>{
        clearInterval(interval);
           console.log("component unmounted");
        }
    },[]);


    return (
        <div>
           <p>timer:{seconds}</p> 
           <Link to="counterone" className="btn btn-primary">click me!</Link>
        </div>
    )
}

// }
 export default UseEffectHookComp;