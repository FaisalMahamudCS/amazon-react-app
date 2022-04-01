import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
         <nav className='header'>
             <img src={logo} alt="" srcset="" />
        <div>
           <Link to='/'>Home</Link> 
           <Link to='/inventory'>Inventory</Link> 
           <Link to='/order'>Order</Link> 
   
        </div>
         </nav>
         
      
    );
};

export default Header;