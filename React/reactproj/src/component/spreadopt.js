import React from 'react';

const SpreadComp=()=>{

    let obj1 = {
        Name : "Selva",
        Age : "22",
        EmpId : "4583"
    }
    let obj2 = {
        Name : "Tharun",
        Age : "23",
        EmpId : "4556"
    }

    let arr1, arr2;

    const handleChange=(target)=>{
        const{name,value}=target;
        arr1=[obj1,obj2];
        arr2=[{...obj1,[name]:value},obj2]

    }
    console.log(arr1);
  
    return(
      <div>

        <button type="submit" >submit</button>
        <input className='inputclass' name="Name" value="selva" onChange={handleChange}></input>
        
      </div>
    )



}
export default SpreadComp;