import React, { Component } from 'react';
import './about.css';
import profilePic from "../../public/profile_pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-container">
          <div className="img-container">
            <img src={profilePic} className="profile-pic" alt="profilePic"/>
          </div>
          <div className="name-container">
            <div className="name">Divyanshi Srivastava</div>
            <div className="title">Full-stack Developer</div>
            <p className="about-me">
              I am a Computer Science Graduate Student at University of California Riverside.
            </p>
          </div>
        </div>
        <div className="skill-container">
        <div className="envelop"/>

          <div className="skill-heading"> Skills</div>
          <FontAwesomeIcon icon={"fab","react"} />
          {/* <i class="fab fa-angular"></i> */}
        </div>
      </div>
    );
  }
}

export default About;
