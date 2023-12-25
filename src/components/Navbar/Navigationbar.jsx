import React from 'react'
import './Navbar.css'
import logo from '../../assets/OQPX090.jpg'
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

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
        <p>Service</p>
        <p>Contact Us</p>

      </div>

      {/* <Navbar >
        <Container>
          <Nav>
            <div className='navLists'>
              <div className="navItem">
                <Link className='NavLink' to='/'>Home</Link>
              </div>
              <div className="navItem">

                <Link className='NavLink' to='/aboutus'>About us</Link>
              </div>
              <div className="navItem">

                <Link className='NavLink' to='/contact'>contact Us</Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  )
}

export default Navigationbar