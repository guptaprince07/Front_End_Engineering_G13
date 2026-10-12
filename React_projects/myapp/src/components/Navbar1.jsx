import React from 'react'
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <div style={{ background: 'white', padding: '10px' }}>
      <nav className='main-nav'>
        <Link to="/">Home</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/about">About Us</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/contact">Contact Us</Link> &nbsp; &nbsp; &nbsp;
      </nav>
    </div>
  )
}

export default Navbar1;