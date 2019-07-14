import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <a>
        <img
          src={logo}
          style={{
            width: 40,
            marginTop: 0,
            marginBottom: 3,
            marginLeft: -5,
            marginRight: 10,
          }}
        />
      </a>
      <Navbar.Brand href="/">UNCHARTED</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbardropdown">
          <NavDropdown title="Tracks" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Top 25</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#search/">Search</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#addsong/">Add A Song</Nav.Link>
          <Nav.Link href="#about/">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
