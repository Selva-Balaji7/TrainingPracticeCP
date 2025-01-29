import React from 'react'

export const UserComp = (props) => {
    if(props.user!=="selva balaji")
    {
        throw new Error
    }
    return (
        <div>
           <p>{props.user}</p> 
        </div>
    )
}
export default UserComp
