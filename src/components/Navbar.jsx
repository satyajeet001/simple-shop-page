import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function navigation(){
    return(
        <>
            <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/brand_logo.png"
              width="55"
              height="35"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="danger">Login</Button>{' '}
        </Container>
      </Navbar>
        </>
    );
}

export default navigation;