import React from 'react'
import { useNavigate } from 'react-router-dom'

 const UseNavigateComp = () => {
 const nav=useNavigate();
//  const currentUrl=window.location.href;
 const currentUrl=nav.location;
  const handleNavigate=()=>{
    nav('/counterone')
    nav('/') //go to default path
    nav(-1) //go to previous page
    
  }
    return (
        <div>
            <h3>this usenavigate component</h3>
            <h2>currenturl:{currentUrl.pathname}</h2>
            <button type="button" className='btn btn-secondary' onClick={handleNavigate}>click me!</button>

        </div>
    )
}

export default UseNavigateComp
