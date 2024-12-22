
import React from 'react'

import Button from './button'



const Navbar = () => {
  return (
      <>
    
    <nav className="navbar">
      <div className="navbar-brand">Recovering and Enhancing Facial Images</div>
      <ul className="navbar-links">
        
        <Button value='Home' />
        <Button value='About Us' />
        <Button value='Sign Up/Login' />
        <Button value='Our Work' />
        <Button value='Contact Us' />
        
      </ul>
    </nav>
    
    </>
  );
}

export default Navbar
