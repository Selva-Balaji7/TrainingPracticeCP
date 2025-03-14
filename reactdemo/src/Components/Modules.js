import React from 'react'
import  {name,add} from './NamedExport.js'
import {years as age} from './NamedExport.js'
import {NamedExport} from './NamedExport.js'
// import DefaultExport from './DefaultExport.js';
import df from './DefaultExport.js'

const Modules = () => {
  return (
    <div>
      <h2>My name is {name} and i am {age} old</h2>
      <NamedExport/>
    </div>
  )
}
add();
// DefaultExport();
df();




export default Modules;
