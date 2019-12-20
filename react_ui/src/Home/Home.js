import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css';
import Card from "../Card/Card";
import ucrImage from "../../public/UCR.png";
import infy from "../../public/Infosys.png";
import ImageBoxAnimation from './ImageBoxAnimation';

const Wrapper = styled.div``;

class Home extends Component {
  render() {
    console.log("home render");
    return (
      <div className="home-container">
        <Wrapper>
          <ImageBoxAnimation />
        </Wrapper>
        <div className="name-heading">DIVYANSHI SRIVASTAVA</div>
        <div className="social-media-container">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href="https://www.linkedin.com/in/divyanshi-srivastava/"}
          />
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href= "https://github.com/Dvnc94"}
          />
          {/* <FontAwesomeIcon
            icon={["fab", "medium"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href ="https://medium.com/@divyanshi1350"}
          /> */}
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href= "https://www.facebook.com/divyanshi.srivastava.1"}
          />
        </div>
        <div className="slope-container">
          <div className="left-slope"/>
          <div className="right-slope"/>
        </div>
        <div className="card-component-container">
          <div className="highlights-heading">Highlights</div>
          <Card
            front="Student at University of California- Riverside"
            back="Computer Science Graduate Student at UCR. Go Highlanders !!"
            link=""
            frontImage={ucrImage}
            frontImageHeight="5vw"
          />
          <Card
            front="Ex Power Programmer at Infosys"
            back="Power Programmers are ‘Polyglots’, experts across multiple technologies and play the role of a full stack developer in complex engineering projects"
            link="https://www.infosys.com/careers/power-programmers.html"
            frontImage={infy}
            frontImageHeight="3.5vw"
          />
        </div>
        <div className="other-text">Check out other tabs to know more about me</div>
        <footer className="footer"> &copy; 2019 Divyanshi Srivastava</footer>
      </div>
    );
  }
}

export default Home;