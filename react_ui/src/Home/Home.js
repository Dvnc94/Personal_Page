import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css';
import Card from "../Card/Card";
import flowless from "../../public/Flowless_logo.png";
import flare from "../../public/Flare_logo.png";
import ImageBoxAnimation from './ImageBoxAnimation';

const Wrapper = styled.div``;

class Home extends Component {
  render() {
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
          <FontAwesomeIcon
            icon={["fab", "medium"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href ="https://medium.com/@divyanshi1350"}
          />
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href= "https://www.facebook.com/divyanshi.srivastava.1"}
          />
          <FontAwesomeIcon
            icon={["fab", "dev"]}
            className="media-icon"
            size="3x"
            onClick={() => window.location.href= "https://devpost.com/divyanshi1350?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}
          />
        </div>
        <div className="slope-container">
          <div className="left-slope"/>
          <div className="right-slope"/>
        </div>
        <div className="card-component-container">
          <div className="highlights-heading">Projects</div>
          <div className="cards">
            <Card
              front="Tower Defence Game"
              back="A 3D tower defense game developed on Unity as part of a course"
              link="https://github.com/DishonJordan/UnityTowerDefense"
              frontImage=""
              frontImageHeight="4.5vw"
            />
            <Card
              front="FlowLess"
              back="A React-based app to help minimize water consumption and work with friends to curve sustainability issues"
              link="https://github.com/Dvnc94/Waterly"
              frontImage={flowless}
              frontImageHeight="3vw"
            />
            <Card
              front="Flare"
              back="Flare is a forest fire detection system for rangers and fire services. By harnessing the power of wireless sensor networks and data visualization we can help reduce wildfire risks."
              link="https://devpost.com/software/flare-5jyszu"
              frontImage={flare}
              frontImageHeight="4.5vw"
            />
            <Card
              front="Jumping Dot"
              back="Created a 2D game on Unity, an imitation of Flappy Bird to understand game development. "
              link="https://github.com/Dvnc94/Jumping-Dot"
              frontImage=""
              frontImageHeight="3vw"
            />
            <Card
              front="Weather Trends and Prediction"
              back="The project aims to display a correlation between temperature, humidity, rain, wind speed for the period of 10 years in Szeged, Hungary and train a model to predict temperature for next 5 days."
              link="https://github.com/Dvnc94/WeatherPrediction"
              frontImage=""
              frontImageHeight="4.5vw"
            />
            <Card
              front="Budgetary"
              back="Financial instability is a prominent problem all over the world. Simplify budgets with your new best friend - Budgetary"
              link="https://github.com/DishonJordan/UnityTowerDefense"
              frontImage=""
              frontImageHeight="4.5vw"
            />
          </div>
        </div>
        {/* <div className="other-text">Check out other tabs to know more about me</div> */}
        <footer className="footer"> &copy; 2019 Divyanshi Srivastava</footer>
      </div>
    );
  }
}

export default Home;
