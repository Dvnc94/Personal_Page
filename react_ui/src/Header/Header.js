import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Resume from "../../public/portfolo_resume.pdf";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: window.location.pathname === "/Portfolio",
    };
  }

  handleTabChange(e, tab) {
    this.setState({ 
      activeTab: tab
    });
  }

  render() {    
    return (
      <div className="header-container">
        <nav fixed="top" className={this.state.activeTab ? "navbar-transparent" : "navbar"}>
            <Link
              className="navbar-brand"
              to="/Portfolio"
              onClick={(e) => this.handleTabChange(e, true)}
            >Divyanshi Srivastava</Link>
            <ul className="nav navbar-nav nav-contents">
              <li className=""><Link
                className="tab-name"
                to="/Portfolio/about"
                onClick={(e) => this.handleTabChange(e, false)}
                >About
                </Link></li>
              <li><a
                className="tab-name"
                href={Resume}
                target='_blank' 
                >Resume
                </a ></li>
              <li><Link
                className="tab-name"
                to="/Portfolio/contact"
                onClick={(e) => this.handleTabChange(e, false)}
                >Contact
                </Link></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
