
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComp from './HeaderComp';
import JewelNavComp from '../jwelleryshop/JewelNavComp';
import JewelFooterComp from '../jwelleryshop/JewelFooterCamp';

const JewelDashBoardComp = () => {
  return (
    <>
    <div class="card">
        <div className="card header">
            <HeaderComp></HeaderComp>
        </div>
   </div>
    <div className="card text-center">
    <div className="card-header">
       <JewelNavComp></JewelNavComp>
    </div>
    <div className="custom-card-body" >
      <div className="card-body">
        <Outlet></Outlet>
      </div>
</div>
    <div className="card-footer text-body-secondary">
       <JewelFooterComp></JewelFooterComp>
    </div>
  </div>
  </>
  
  );
};

export default JewelDashBoardComp;
