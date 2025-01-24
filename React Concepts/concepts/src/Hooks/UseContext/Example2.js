import React from 'react'
import {createContext,useContext,useState} from 'react'

const UserContext=createContext();
function Example2(){
    const [user]=useState('selva balaji');
    return(
        <UserContext.Provider value={user}>
            <h1>Example2</h1>
            <Component5/>
        </UserContext.Provider>
    )

}
 function Component2(){
    return(
        <>
         <h2>Component2</h2>
         <Component3/>
        </>
    )

 }
 function Component3(){
    return(
        <>
        <h3>Component3</h3>
        <Component4/>
        
        </>
    )
 }

 function Component4(){
    return(
        <>
        <h3>Component4</h3>
        <Component5/>
        </>
    )
 }
 function Component5(){
    const user= useContext(UserContext)
    return(
        <>
         <h4>Component 5</h4>
         <h3>this is component 5 using usecontext {user}</h3>
        </>
    )
 }
    
    
  
export default Example2;
