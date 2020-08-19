import React, { Component } from 'react';
import './contact.css';
import dvncLogo from "../../public/dvncLogo.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

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
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/mlepkgyo"
              method="POST"
            >
              <label className="label">Name<p className="red">*</p></label>
              <input className="input" name="name" />
              <label className="label">Email<p className="red">*</p></label>
              <input className="input" name="email" />
              <label className="label">What do u wanna say...<p className="red">*</p></label>
              <textarea className="input" rows="4" name="message" />
              <div className="send-button-container">
                {this.state.status === "SUCCESS" ? <p>Thanks for reaching out. I'll get back to you soon</p> :
                  <button className="send-button">Send</button>
                }
                {this.state.status === "ERROR" && <p style={{color: "red"}}>Ooops! There was an error.</p>}
              </div>
            </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact;
