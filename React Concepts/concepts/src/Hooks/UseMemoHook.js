import React, {useState,useMemo,useCallback} from 'react'
import Factorial from './useCallbackHook';



export const UseMemoHook = () => {
    const[count, setCount]=useState(0);
    const[name,setName]=useState({firstname:'',lastname:''})
    const[factorial, setFactorial]=useState(1)

   const increment=()=>{
      setCount(prevstat=>prevstat+1);
      console.log(`this is increment state`)
    }

   const factorialOf=(n)=>{
    console.log(`this is finding of factorial number`);
    let result=1;
     if(n<=1)
        {
          return;
        }   
    else{
        for(let i=n;i>=1;i--)
        {
         result=result*i;
        }
      return result;
    }
   }
   //const fact=factorialOf(factorial)
   const fact=useMemo(()=>factorialOf(factorial),[factorial])

  //  const updateNumber=(e)=>[
  //   setFactorial(e.target.value)

      const updateNumber=useCallback((e)=>{
      setFactorial(e.target.value);
      },[factorial]);
    

    return (
        <div>
            <p>counter:{count}</p>
            <button className='btn btn-primary' onClick={increment}>click</button>
            <hr/>
            <label>Enter your first name:</label>
            <input type="text" onChange={(e)=>setName({...name, firstname:e.target.value})}></input>
            <label>Enter your last name:</label>
            <input type="text" onChange={(e)=>setName({...name, lastname:e.target.value})}></input>
            <p>The firstname is:{name.firstname}</p>
            <p>The lastname is:{name.lastname}</p>
            <hr/>
             {/* <p>Enter the factorial number</p>
            <input type="number" placeholder='Enter the number' onChange={(e)=>setFactorial(e.target.value)}></input>
            <p>the factorial of the {factorial} is {fact}</p> */}
             <Factorial factorial={fact} updateNumber={updateNumber} givenNumber={factorial}/>
            
        </div>
    )
  }
export default UseMemoHook