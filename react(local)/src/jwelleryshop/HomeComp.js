import React from 'react';
import commonData from '../shared/constant/constantData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './External.css'
const HomeComp = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={commonData.goldbarcoursel} className="d-block w-100" alt="gold"/>
    </div>
    <div className="carousel-item">
    <img src={commonData.msdCoursel} className="d-block w-100" alt="msd"/>
    </div>
    <div className="carousel-item">
    <img src={commonData.necklacCours} className="d-block w-100" alt="necklace"/> 
    </div>
  </div>
  <div>
    <h2>Welcome to SSS Jewelleries</h2>
      <h4>Crafting Timeless Elegance</h4>
<p>
Discover the perfect blend of tradition and modernity with SSS Jewelleries. Our exquisite collection is designed to celebrate every moment, from life's milestones to your everyday sparkle.
</p>
 <h2>Our Collections</h2>
 <ul className='homelist'>
   <li>✨ Gold Jewellery – Radiate royalty with our intricately crafted gold ornaments. </li>
    <li> ✨ Diamond Jewellery – Shine bright with our stunning diamond designs.</li>
    <li>✨ Platinum Creations – Pure, rare, and eternal pieces to cherish forever.</li>
    <li> ✨ Silver Specials – Beautiful and affordable designs for every occasion.</li>
 </ul>
    <h2>Why Choose SSS Jewelleries?</h2>
    <ul className='homelist'>
     <li>✔️ Handcrafted with Perfection</li>
     <li>✔️ 100% Certified Jewellery</li>
    <li>✔️ Exclusive Designs for Every Occasion</li>
     <li>✔️ Trusted by Generations</li>
    </ul>
    <h2>Shop with Confidence</h2>
    <pre>Step into a world of trust, quality, and unmatched designs. Whether you're shopping for a wedding, a gift, or a personal treat, SSS Jewelleries ensures an unforgettable experience.</pre>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
</>
  );
};

export default HomeComp;




 
 