import React, { Component } from 'react';
import './card.css';
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class Card extends Component {
  render() {    
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack
            data={this.props.back}
            link={this.props.link}
          />
          <CardFront
            data={this.props.front}
            image={this.props.frontImage}
            imageHeight={this.props.frontImageHeight}
          />
        </div>
      </div>
    )
  }
}

export default Card;