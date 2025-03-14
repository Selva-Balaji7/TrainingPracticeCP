import React from 'react';
// import './CondrenComp.css';
//  import '../styles/ReactCss.css'
 import reactcss from '../styles/ReactCss.module.css'
import car from '../App'

const CondrenComp = () => {
    let isCond= true;
    let content;
    

  if (isCond) {
    content = (
      <div>
        <h2>Welcome back!</h2>
        <p className={reactcss.heading}>You are logged in.</p>
        <p>car name is {car}</p>
      </div>
    );
  } else {
    content = (
      <div>
        <h2>Please log in.</h2>
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default CondrenComp;

 