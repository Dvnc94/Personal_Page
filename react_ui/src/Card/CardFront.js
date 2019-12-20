import React, { Component } from 'react';
import './card.css';

class CardFront extends Component {
    render() {
        return(
        <div className='card-side side-front'>
            <div className='side-front-content'>
               {this.props.data}
            </div>
        </div>
        )
    }
}

export default CardFront;