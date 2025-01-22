import { Button } from "bootstrap";
import { useState } from "react";

// const UseStateHooksComp = () => {

//     const [count, setCount] = useState(0);
//     const [name, setName] = useState("natheesh");

//     const incrementCount = () => {
//         setCount(count + 1);
//     }

//     const highIncrement=()=>{
//         setCount(count+5);
//     }

//     return (
//         <div>
//             <h2>this is use state hooks component</h2>
//             <p>conter value:<strong>{count}</strong></p>

//             <button type="button" onClick={() => incrementCount()}
//                 className="btn btn-primary me-2">change count</button>

//             <button type="button" onClick={() =>highIncrement()}
//                 className="btn btn-primary me-2">change count+5</button>

//             <hr />
//             <p>my name:{name}</p>
//             <button type="button" onClick={() => setName("natheesh kumar")}
//                 className="btn btn-primary">change name</button>

//         </div>
//     )
// }

// const UseStateHooksComp=()=>{

//      const [name, setName]=useState("selva");
//      const [age, setAge]=useState(21);

//      const changeName=()=>
//      {
//       setName("balaji");
//      }

//      const changeAge=()=>
//         {
//          setAge(22);
//         }

//         return(
//             <div>
//             <p>My name is {name}, Iam {age} years old</p> 
//     <button type="button" className="btn btn-outline-primary" onClick={changeName}>change name</button>

//     <button type="button" className="btn btn-outline-success" onClick={changeAge}>change age</button>
//             </div>


//         )

// }

function UseStateHooksComp() {

    const [empState, changeState] = useState({name:"User", sal:12344});

    const updateName = () =>{
        let userName = document.getElementById('userName').value;
        changeState({name:userName, sal:empState.sal});
    }


    return ( 
        <div>
            <h5>UseStateHooks</h5>

            <p>Hello {empState.name} your salary will be {empState.sal}</p>

            <input className="border border-primary" id="userName" name="userName"></input>
            <button type="button" onClick={()=>updateName()}>Confirm Name</button>
        </div>
     );
}


export default UseStateHooksComp;


// const UseStateHooksComp=()=>{

//     const [name, setName]=useState("selva");
//     const [age, setAge]=useState(21);

//     const changeDetails=()=>
//     {
//      setName("balaji");
//      setAge(22);
//     }

//        return(
//            <div>
//            <p>My name is {name}, Iam {age} years old</p> 
//             <button type="button" className="btn btn-outline-primary" onClick={changeDetails}>change Details</button>

//             {/* <button type="button" className="btn btn-outline-success" onClick={changeAge}>change age</button> */}
//            </div>


//        )

// }