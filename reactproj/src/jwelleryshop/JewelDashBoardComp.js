
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import JewelNavComp from '../jwelleryshop/JewelNavComp';
import JewelFooterComp from '../jwelleryshop/JewelFooterCamp';
const JewelDashBoardComp = () => {
  return (
    <div>
      <header className="bg-light py-3">
      <div className="container1 d-flex align-items-center justify-content-center">
        
        {/* <img src={RupeshJewels} alt="Rupesh Jewels" className="me-2" style={{ width: '50px', height: '50px',borderRadius: '50%', marginRight: '10px' }} /> */}
  
        <h1 className="text-success"><strong>SSS Jewels</strong></h1>
      </div>
    </header>
      <JewelNavComp >
        
      </JewelNavComp>
      <main className="container border mt-3 p-4">
        <Outlet />
      </main>
      <div>
        <JewelFooterComp/>
      </div>
    </div>
  );
};

export default JewelDashBoardComp;
