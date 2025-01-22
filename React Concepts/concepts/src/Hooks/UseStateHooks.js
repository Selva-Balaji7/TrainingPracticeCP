import {useState} from 'react'
 
//basic state management
const UseStateHooksComp=()=>{

        // const [name, setName]=useState("selva");
        // const [age, setAge]=useState(21);
    
        // const changeDetails=()=>
        // {
        //  setName("balaji");
        //  setAge(22);
        // }
    
        //    return(
        //        <div>
        //        <p>My name is {name}, Iam {age} years old</p> 
        //         <button type="button" className="btn btn-outline-primary" onClick={changeDetails}>change Details</button>
    
        //         {/* <button type="button" className="btn btn-outline-success" onClick={changeAge}>change age</button> */}
        //        </div>
    
    
        //    )





        // const[Count,setCount]=useState(0);

        // // function increment(){
        // //     setCount(Count+1)
        // // }
        // return(
        //     <div>
        //         <p>count:{Count}</p>
        //         <button className="btn btn-primary" onClick={()=>setCount(Count+1)}>update</button>
        //     </div>
        // )

      //managing strings

    //   const[fname, setName]=useState('')
      
    //   return(
    //     <div>
    //         <p>your name:{fname}</p>
    //         <label>Enter name:</label>
    //         <input type="text" value={fname} onChange={(e)=>setName(e.target.value)}></input>
            
    //     </div>
    //   )



     //managing Booleans

    //   const [isVisible, setIsVisible]=useState(false);

    //   return(
    //     <div>
    //         <button className="btn btn-warning" type="button" onClick={()=>setIsVisible(!isVisible)}>  {
    //             isVisible?'hide':'show'
    //         }</button>
            
    //         {
    //             isVisible && <p>Hello world!</p>
    //         }

    //     </div>
    //)
       
   //Managing Objects in state
    //   const[user, setUser]=useState({name:'',age:''});

    //   const handleChange=(e)=>{
    //     const {name,value}=e.target
    //     setUser({...user,[name]:value})
    //     console.log(e.target);
    //   }

    //   return(
    //     <div>
        
    //       <label>Enter name:</label>
    //       <input type="text" name="name" placeholder="yourname" value={user.name} onChange={handleChange}></input><br/>
    //       <label>Enter age:</label>
    //       <input type="number" name="age" placeholder="yourage" value={user.age} onChange={handleChange}></input><br/>
    //       <p>your name is:{user.name}</p><br/>
    //       <p>your age is:{user.age}</p>
    //     </div>
    //   )
    //Managing arrays using state
     const[tasks, setTask]=useState([]);

     function addtask(){
        setTask([...tasks, `task is:${tasks.length+1}`])
     }

     return(
        <div>
           
            
             <ul>
                {
                tasks.map((task,index)=>
                
                <li key={index}>{task}</li>
                )
              }
                
             </ul>
            
            <button type="button" onClick={addtask}>add</button>
        </div>
     )


      












    }

 





















    export default UseStateHooksComp