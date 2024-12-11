import React  from "react"
const UserComp=(props)=>{
    return(

        <div>
            <h2>This my user props</h2>

        </div>
    )
       
        
    
}
const UserComp1=(props)=>{
    return(

        <div>
            <h2>{props.user}</h2>

        </div>
    )
}
export default UserComp
