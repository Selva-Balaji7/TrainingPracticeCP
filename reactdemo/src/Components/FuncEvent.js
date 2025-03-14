import React, { useState } from 'react'

const FuncEvent = (props) => {
//   const {name,age,role}=props
  const [name,setUname]=useState('');
  const [age,setUage]=useState('');
  const [role,setUrole]=useState('');

  const ChangeData=()=>{
    setUname("paul");
    setUage("24");
    setUrole("program analyst");
  }

  return (
    <div>
         <p>My name is {name ||props.name} and I am {age ||props.age} years old and working as {role || props.role}</p>
      {/* <p>My name is {name} and i am {age} years old and working as {role}</p> */}
      <button className="btn btn-success" onClick={ChangeData}>ChangeData</button>
    </div>
  )
}

export default FuncEvent
