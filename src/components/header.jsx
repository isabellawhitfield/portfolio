import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand href="#">Isabella Whitfield</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/" exact={true}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/projects" exact={true}>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
