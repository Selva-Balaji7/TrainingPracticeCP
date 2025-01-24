import React from 'react'
import {useState} from 'react'

//const UserContext=createContext();
function Component1(){
    const [user,setUser]=useState('selva balaji');
    return(
        <>
          <h2>Component1</h2>
          <Component2  user={user}/>

        </>
    )

}
 function Component2({user}){
    return(
        <>
         <h2>Component2</h2>
         <Component3 user={user}/>
        </>
    )

 }
 function Component3({user}){
    return(
        <>
        <h3>Component3</h3>
        <Component4 user={user}/>
        
        </>
    )
 }

 function Component4({user}){
    return(
        <>
        <h3>Component4</h3>
        <Component4 user={user}/>
        
        </>
    )
 }
 function Component5({user}){
    return(
        <>
         <h4>Component 5</h4>
         <h3>`this is lowest child component ${user}`</h3>
         
        </>
    )
 }
    
    
  
export default Component1;
