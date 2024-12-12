import React from 'react'
import { Link } from 'react-router-dom'
const JewelNavComp = () => {
  return (
    <div className="nav nav-pills mt-3 justify-content-center">
    <h2></h2>
    <Link to="Home" className="btn btn-warning btn-sm mx-2">Home</Link>
    <Link to="Products" className="btn btn-info btn-sm mx-2">Products</Link>
    <Link to="About" className="btn btn-success btn-sm mx-2">About</Link>
    <Link to="Contact" className="btn btn-danger btn-sm mx-2">Contact</Link>
    
</div>

  )
}

export default JewelNavComp