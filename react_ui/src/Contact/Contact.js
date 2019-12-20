import React, { Component } from 'react';
import './contact.css';
import dvncLogo from "../../public/dvncLogo.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
          <div className="envelop-container">
            <div className="envelop-fold"/>
            <div className="fold-heading">Let's Connect</div>
            <div className="logo-container">
              <img src={dvncLogo} className="dvnc-seal" alt="dvncLogo"/>
            </div>
            <div className="form">
            <form>
              <label className="label">Name</label>
              <input className="input" />
              <label className="label">Email</label>
              <input className="input" />
              <label className="label">What do u wanna say...</label>
              <textarea className="input" rows="4"/>
              <div className="send-button-container"><button className="send-button">Send  </button></div>
            </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact;
