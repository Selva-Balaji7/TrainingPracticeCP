import React from 'react'

export const EventtargetComp = () => {

    function handleChange(event)
    {
     console.log(event.target);
    }
    function handleClick(event)
    {
        console.log(event.target);
    }

    return (
        <div>
            <label>Enter your name:</label>
            <input type="text" onChange={handleChange}></input><br/>
            <button type="button" id="button1" className='btn btn-success' onClick={handleClick}>click me!</button>
        </div>
    )
}
export default EventtargetComp
