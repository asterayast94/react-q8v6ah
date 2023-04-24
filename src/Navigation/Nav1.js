import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="home">CBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="feedback">Feedback</Nav.Link>
            <Nav.Link href="location">Locations</Nav.Link>
            <NavDropdown title="Coming Soon" id="collasible-nav-dropdown">
              <NavDropdown.Item href=""> New 1 </NavDropdown.Item>

              <NavDropdown.Item href="">New 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="">Language</Nav.Link>
            <Nav.Link eventKey={2} href="">
              Dark
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CollapsibleExample;
