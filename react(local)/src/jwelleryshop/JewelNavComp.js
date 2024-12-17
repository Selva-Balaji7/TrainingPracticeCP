import React from 'react'
import {Link} from 'react-router-dom'
const JewelNavComp = () => {
  return (
    <div className="nav nav-pills justify-content-center">
    <Link to="Home" className="btn btn-outline-warning mx-5">Home</Link>
    <Link to="About" className="btn btn-outline-success mx-5">About</Link>
    <Link to="Products" className="btn btn-outline-info mx-5">Products</Link>
    <Link to="Contact" className="btn btn-outline-danger mx-5">Contact</Link>
    
</div>
   
  )
}

export default JewelNavComp