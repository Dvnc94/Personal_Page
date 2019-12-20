import React, { Component } from 'react';
import './card.css';

class CardBack extends Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='back-container'>
          <p>{this.props.data}</p>
          {this.props.link !== "" ? <button
            className="btn-primary learn-more"
            onClick={ () => window.location.href=this.props.link }
          >Learn More !
          </button> : null}
        </div>
      </div>
    )
  }
}

export default CardBack;