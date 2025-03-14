import React, { useState } from 'react';

const Condrend2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let msg='';

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev); // Toggle the login state
  };
  

//   1. using ifelse:
  if(isLoggedIn){
      msg=(
        <div>
        <h2>Welcome back to the conditonal rendering!</h2>
        <p>You are logged in.</p>
        <button className='btn btn-danger' onClick={toggleLogin}>Log Out</button>
      </div> 
      );
  }
  else{
      msg=(
        <div>
        <h2>Please log in to see the output</h2>
        <button className='btn btn-success' onClick={toggleLogin}>Log In</button>
      </div>
      );

  }


//   2.ternary operator
//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h2>Welcome back!</h2>
//           <p>You are logged in.</p>
//           <button className='btn btn-danger' onClick={toggleLogin}>Log Out</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Please log in.</h2>
//           <button className='btn btn-success' onClick={toggleLogin}>Log In</button>
//         </div>
//       )}
//     </div>
//   );

// 3.using element as a variable
  return(
      <div>
          {msg}
      </div>
  )

// 4.using short circuit condition
//   return(
//       isLoggedIn && <h2>login successfull</h2>
    
//   )
};

export default Condrend2