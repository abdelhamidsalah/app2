import React  from 'react'
import './Navv.css'
import { NavLink } from 'react-router-dom';
import {Navbar , Container ,Nav } from 'react-bootstrap';
const Navv = () => {
  
  return (
    
  <div id='navv'>
  <Navbar expand="lg" >
      <Container>
        <Navbar.Brand >
        <img src={require("./Photos/logo.png")} alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle id='but' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='items'>
            
            <NavLink to='/Home' id='item'>Home</NavLink>
            <NavLink to='/About' id='item'>About</NavLink>
            <NavLink to='/Gallery' id='item'>Gallery</NavLink>
            <NavLink to='/Plans' id='item'>Plans</NavLink>
            <NavLink to='/Trainers' id='item'>Trainers</NavLink>
            <NavLink to='/Contact' id='item'>Contact</NavLink>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
    
  )
}

export default Navv