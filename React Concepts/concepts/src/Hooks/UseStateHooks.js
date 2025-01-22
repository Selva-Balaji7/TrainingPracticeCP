import {useState} from 'react'
const UseStateHooksComp=()=>{

        const [name, setName]=useState("selva");
        const [age, setAge]=useState(21);
    
        const changeDetails=()=>
        {
         setName("balaji");
         setAge(22);
        }
    
           return(
               <div>
               <p>My name is {name}, Iam {age} years old</p> 
                <button type="button" className="btn btn-outline-primary" onClick={changeDetails}>change Details</button>
    
                {/* <button type="button" className="btn btn-outline-success" onClick={changeAge}>change age</button> */}
               </div>
    
    
           )
    
    }

    export default UseStateHooksComp





















    export default UseStateHooksComp