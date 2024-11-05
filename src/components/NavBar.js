import React from 'react'
import './Styles/NavBar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
function NavBar() {
  return (
<div className="nav_bar ">
    <div className="Container">
        <div className="logo">
            <a href="#"><i className="bi bi-shop"></i> Dzair Shop</a>
        </div>
        <div className="Search_bar">
            <button className="left"><i className="bi bi-search"></i></button>
            <input type="text" id="Search" className='search'></input>
            <button className="right"><i className="bi bi-list-task"></i></button>
        </div>
        <div className="client_inf">
            <a href="#"><i className="bi bi-person"></i> Sign UP/Sign In</a>
            |
            <a href="#"><i className="bi bi-cart3"></i> Cart</a>
        </div>
    </div>
</div>
  )
}

export default NavBar