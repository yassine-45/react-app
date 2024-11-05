import React from 'react'
import'./Styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTruck, faGear } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div className="TopBar">
          <div className="Container">
           <h5>welcome to word wide Dzair Shop!</h5> 
           <ul>
           <li><FontAwesomeIcon icon={faLocationDot} className="custom-icon" /> Deliver to 42000</li>
          <li><FontAwesomeIcon icon={faTruck} className="custom-icon" /> Track your order</li>
          <li><FontAwesomeIcon icon={faGear} className="custom-icon" /> All offers</li>
           </ul>
        </div>
        </div>   
  )
}

export default Header