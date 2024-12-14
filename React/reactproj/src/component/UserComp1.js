import React from "react";
const UserComp1=(props)=>{
    if(props.user==="Arun"){
        throw Error("Not a user");
    }
    return(
        <div>
         <h2>User is:{props.user}</h2>
        </div>
    )
        
    


}
export default UserComp1