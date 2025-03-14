import React from 'react'

const ChildComp = (props) => {
    const {name,sal,managestate}=props;
    
    changeBio=()=>{
        const newname="tharun";
        const newsal=150000;
        
    }


  return (
    <div>
        <h2>This is child component</h2>
        <p>My name is {name} and salary is {sal} </p>
        <h1 onMouseOver={managestate}>Change Data</h1>
        <button classbtn="btn btn-primary" onClick={()=>changeBio()}>change state</button>
    </div>
  )
}

export default ChildComp;
