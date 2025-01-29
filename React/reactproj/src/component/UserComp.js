import React  from "react"
const UserComp=(props)=>{
    let msg=""
    if(props.user==="Selva Balaji")
    {
       msg=`username ${props.user} for this  child component`
    }
    else{
        throw new Error
    }
    return(

        <div>
            <h2>{msg}</h2>

        </div>
    )
       
        
    
}
// const UserComp1=(props)=>{
//     return(

//         <div>
//             <h2>{props.user}</h2>

//         </div>
//     )
// }
export default UserComp
