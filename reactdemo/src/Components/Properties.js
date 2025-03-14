import React from 'react'

const Properties = (props) => {
  const {name,age,company}=props;
  return (
    <div>
      <p>My name is {props.name} and i am {props.age} working in {props.company}</p>
      <p>My name is {name} and i am {age} working in {company}</p>

    </div>
  )
}

export default Properties
