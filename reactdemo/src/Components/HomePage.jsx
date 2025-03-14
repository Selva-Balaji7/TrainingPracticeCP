import React from 'react'
import { pics } from '../database/images'



const HomePage = () => {
  return (

    <div>

<div id="demo" class="carousel slide" data-bs-ride="carousel">

{/* Indicators/dots  */}
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

{/* <!-- The slideshow/carousel --> */}
<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="3000">
    <img src={pics.banner2} alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item" data-bs-interval="3000">
    <img src={pics.banner2} alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item" data-bs-interval="3000">
    <img src={pics.banner2} alt="New York" class="d-block w-100"/>
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>






















































       {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner" style={{width:"1600px", height:"750px"}}>
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={pics.banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={pics.banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={pics.banner2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
    </div>
  )
}

export default HomePage
