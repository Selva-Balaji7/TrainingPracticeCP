import React from 'react'
import { useParams} from 'react-router-dom'

const UserComp= () => {
    const {id}=useParams();
    return (
        <div>
            <p>this is UserComp with user :{id}</p>            
        </div>
    )
}

export default UserComp
