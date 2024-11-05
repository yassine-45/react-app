import React from 'react'
import './Styles/Menu.css'
function Menu() {
  return (
<div className="Select-Menu">
 <div className="Container">
    <select id="product">
        <option value="Clothing" >Clothing</option>
    </select>
    
    <select id="product">
        <option value="Footwear" >Footwear</option>
    </select>
    <select id="product">
        <option value="Sports" >Sports & Fitness Gear</option>
    </select>


    <select id="product">
        <option value="Home & Garden" >Home & Garden</option>
    </select>

  
    <select id="Electronics" name="Electronics">
        <option value="Electronics"  selected>Electronics</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile">Mobile</option>
        <option value="Tablette">Tablette</option>
        <option value="smartphone">Smartphone</option>
        <option value="smartwatch">Smartwatch</option>
    </select>
   
    <select id="product">
        <option value="Health & Wellness">Health & Wellness</option>
    </select>
    
    <select id="product">
        <option value="Beauty & Personal Care" >Beauty & Personal Care</option>
    </select>
    
    <select id="product">
        <option value="Toys & Games" >Toys & Games</option>
    </select>
    
 </div>
</div>

  )
}

export default Menu