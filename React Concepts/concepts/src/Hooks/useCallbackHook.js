import React,{useEffect} from 'react'

const Factorial = (props) => {
    const {factorial,updateNumber,givenNumber}=props;

    useEffect(()=>{
        console.log(`component re-renders`);
    })

    return (
        <div>
            <p>Enter the factorial number</p>
            <input type="number" placeholder='Enter the number' onChange={updateNumber}></input>
            <p>the factorial of the {givenNumber} is {factorial}</p> 
        </div>
    )
}
export default React.memo(Factorial);