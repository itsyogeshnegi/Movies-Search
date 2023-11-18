import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='main-box'>
        <div className='name'><h2>Movies</h2></div>
        <div className='search'>
            <input type='search' placeholder='Search here...'/>
        </div>
        <div className='addCart'>
        <i className="fa-solid fa-cart-shopping" style={{color:"white", fontSize:"24px"}}></i>
        </div>
    </div>
  )
}

export default NavBar