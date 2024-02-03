import React from 'react'
import './Navbar.css'
import logo from '../../assets/OQPX090.jpg'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {
  return (
    <div className='navbarSection'>
      <div className="logoSection">
        <div className="logo">
          <img src={logo} alt="logo img" />
          <h3 className='logoName'>Employar</h3>
        </div>
      </div>
      <div className="navSection">
      <p>Home</p>
      <p>About Us</p>
      <p>Employee</p>
      <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Navigationbar