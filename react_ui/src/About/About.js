import React, { Component } from 'react';
import './about.css';
import profilePic from "../../public/profile_pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import experiences from './exp';

class About extends Component {
  render() {
    var experience = experiences.map((exp, index) => (
      <div className="exp-container" key={index}>
        <div className="company-logo-container">
          <img src={`../images/${exp.src}`} alt="NA"/>
        </div>
        <div className="content-container">
          <div className="position">{exp.position}</div>
          <div className="duration">{exp.start} - {exp.end}</div>
          <div className="company">{exp.company}</div>
          <br />
          <div className="responsibilities">{exp.responsibilities}</div>
        </div>
      </div>
    ));
    console.log(process.env.PUBLIC_URL + "/exp.src");
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
            I am a Computer Science graduate student at University of California - Riverside passionate about developing solutions helping the student community.
            I love learning new concepts and enjoy implementing them even more.
            I thrive on being challenged and engaging in projects that require me to work outside my comfort and knowledge set. 
            I have worked on a lot of technologies but React is my favorite. This portfolio is my ode to React. 
            <br/><br/>
            I love attending Hackathons and brainstorming awesome ideas with like-minded people in a short time span. I am also a supporter of Women and diversity in Tech.
            I am a foodie and a movies junkie.
            <br/><br/>
            I could be tempted by a really good opportunity! :P
            <FontAwesomeIcon icon={["far", "laughWink"]} className="icon" spin size="6x" />
            </p>
          </div>
        </div>
        <div className="skill-container">
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
        <div className="experience-container">
          <div className="skill-heading">Experience</div>
            <div className="exp-list-container">
            {experience}
            </div>
        </div>
      </div>
    );
  }
}

export default About;
