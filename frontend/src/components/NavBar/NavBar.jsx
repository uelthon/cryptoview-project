import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo  from '../../assets/cryptoview.webp'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
      <Container>
        <Navbar.Brand>
          <img width='30px' height='30px' src={logo} /> <Link to='/'>CriptoView</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to='/coins'>Cryptocurrencies</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar