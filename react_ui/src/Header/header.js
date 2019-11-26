import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Navbar bg="dark" fixed="top" variant="dark" className="navbar">
          <Navbar.Brand className="navbar-brand">Divyanshi Srivastava</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Resume</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
