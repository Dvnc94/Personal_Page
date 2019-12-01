import React, { Component } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Navbar bg="dark" fixed="top" variant="dark" className="navbar">
          <ul className="nav-contents">
            <li><Link className="tab-name-main" to="/Portfolio">Divyanshi Srivastava</Link></li>
            <li><Link className="tab-name" to="/Portfolio/about">About</Link></li>
            <li><Link className="tab-name" to="/Portfolio/resume">Resume</Link></li>
            <li><Link className="tab-name" to="/Portfolio/contact">Contact</Link></li>
          </ul>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form> */}
        </Navbar>
      </div>
    );
  }
}

export default Header;
