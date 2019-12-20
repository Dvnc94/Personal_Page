import React, { Component } from 'react';
import './card.css';

class CardFront extends Component {
    render() {
        return(
        <div className='card-side side-front'>
            <div className='side-front-content'>
               {this.props.data}
            </div>
            {this.props.image !== "" ?
              <img
                className="front-image"
                style={{height: this.props.imageHeight}}
                src={this.props.image}
                alt=""
              /> : null}
        </div>
        )
    }
}

export default CardFront;