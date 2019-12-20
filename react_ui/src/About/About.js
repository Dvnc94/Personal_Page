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
            I am a Computer Science Graduate Student at University of California - Riverside. Graduating in Jan 2021. I have an experience of working as a full-stack developer in Infosys (India). I am also an ex Power Programmer, a very challenging and technically satisfying role thanks to which I have worked in many diverse projects.
            I believe the best way to learn any technology is by implementing it.
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="envelop"/>
          <div className="skill-heading"> Skills</div>
          <div className="skill-row">
            <div className="skill-box">
              <FontAwesomeIcon icon={["fab", "react"]} className="icon" spin size="6x" />
              <div className="skill">React</div>
            </div>
            <div className="skill-box">
              <FontAwesomeIcon icon={["fab", "java"]} className="icon" size="6x" />
              <div className="skill">Java</div>
            </div>
            <div className="skill-box">
              <FontAwesomeIcon icon={["fab", "python"]} className="icon" spin size="6x" />
              <div className="skill">Python</div>
            </div>
            <div className="skill-box">
              <FontAwesomeIcon icon={["fab", "html5"]} className="icon" size="6x" />
              <div className="skill">HTML/CSS</div>
            </div>
            <div className="skill-box">
              <FontAwesomeIcon icon={["fab", "js"]} className="icon" size="6x" />
              <div className="skill">JavaScript</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
