import React, { Component } from 'react';
import './home.css';
// import video from "../../utilities/whiteboardBg.webm";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
          <h1>Heelloo</h1>
        <video id="background-video" loop autoPlay>
            <source src="/../../utilities/whiteboardBg.webm" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Home;
