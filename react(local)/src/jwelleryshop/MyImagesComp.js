import React from 'react'
import commonData from '../shared/constant/constantData';
const MyImagesComp = () => {
  return (
    <div class="card" style="width: 18rem;">
    <img src={commonData.Bangle1}" class="card-img-top" alt="Bangle1" height="200px" width="20px">
    <div class="card-body">
      <h5 class="card-title">Bangles</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
        <div>
        <img src={commonData.Bangle2} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.Bangle3} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.Bangle4} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.chain1} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.chain2} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.chain3} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace1} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace2} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace3} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace4} alt='jewel' height="200px" width="200px"/>
        <img src={commonData.necklace5} alt='jewel' height="200px" width="200px"/>
        </div>

    
  )
}

export default MyImagesComp