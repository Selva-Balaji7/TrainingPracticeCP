import React from 'react'
 const DestructPropsComp =(props) => {
    const {name,salary,id,role}=  props;
    return (
        <div>
            <p>Employee name is {name} of no {id} and his salary is {salary} working as {role}</p>
        </div>
    )
}
export default DestructPropsComp
