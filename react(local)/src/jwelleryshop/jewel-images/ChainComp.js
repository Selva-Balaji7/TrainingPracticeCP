// import React from 'react';
// import {Link} from 'react-router-dom'
// import commonData from '../shared/constant/constantData';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const ChainComp = () => {


  
//   return (
//     <div className="product-page">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//            <div className="container-fluid">
//        <a className="navbar-brand" href="#">Navbar</a>
//        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><Link to="necklace" class="dropdown-item" href="">necklace</Link></li>
//             <li><Link to="chain"  class="dropdown-item" href="">chains</Link></li>
//             <li><Link to="rings" class="dropdown-item" href="">rings</Link></li>
//             <li><Link to="bangles" class="dropdown-item" href="">Bangles</Link></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// <div className="Necklace" mt-2 ms-3 me-3 mb-2 >
//         <div className="row">
//           <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 card border-primary">
//             <img src={commonData.jos12} alt="Bridal Gold Necklace"/>
//             <h4 className="card-title">Bridal Gold Necklace</h4>
//             <del>price &#8377; 2,34,000</del>
//              <strong>price &#8377; 1,34,000</strong>
//         </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN1} alt="necklace2"/>
//             <h3 className="card-title">Elegant Bridal Necklace</h3>
//             <del>price &#8377; 3,12,000</del>
//             <strong>price &#8377; 2,34,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN4} alt="necklace3"/>
//             <h3 className="card-title">Traditional Lakshmi-patterned Bridal</h3>
//             <del>price &#8377; 4,14,000</del>
//              <strong>price &#8377; 3,96,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN5} alt="mobile"/>
//             <h3 className="card-title">Antique lakshmi bridal Necklace</h3>
//             <del>price &#8377;3,34,000</del>
//              <strong>price &#8377;2,34,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.necklaceSet1} alt="mobile"/>
//             <h3 className="card-title">Royal Pattern Gold Haaram</h3>
//             <del>price &#8377; 2,84,000</del>
//              <strong>price &#8377; 2,00,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.necklaceSet2} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 2,03,000</del>
//             <strong>price &#8377; 1,80,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN6} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 2,76,000</del>
//             <strong>price &#8377; 1,94,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN7} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 1,34,000</del>
//              <strong>price &#8377; 1,12,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN8} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 2,34,000</del>
//             <strong>price &#8377; 1,34,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN9} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 4,34,000</del>
//             <strong>price &#8377; 3,90,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.jos10} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 2,34,000</del>
//              <strong>price &#8377; 1,34,000</strong>
//           </div>
//           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 card border-primary">
//             <img src={commonData.josN11} alt="mobile"/>
//             <h3 className="card-title">Classic Fusion bridal Necklace</h3>
//             <del>price &#8377; 3,23,000</del>
//             <strong>price &#8377; 2,94,000</strong>
//           </div>
//         </div>
    
//     </div>
//     </div>
//   );
  
// }

// export default ChainComp;