import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
