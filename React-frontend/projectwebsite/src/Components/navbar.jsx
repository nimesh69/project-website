
import React from 'react'

import {Headers} from './header'



const Navbar = () => {
  return (
      <>
    
    <nav className="navbar">
      <div className="navbar-brand">Recovering and Enhancing Facial Images</div>
      <ul className="navbar-links">
        
        <Headers value='Home' link="/" />
        <Headers value='About Us' />
        <Headers value='Sign Up/Login' link="/login" />
        <Headers value='Our Work' />
        <Headers value='Contact Us' />
        
      </ul>
    </nav>
    
    </>
  );
}

export default Navbar
