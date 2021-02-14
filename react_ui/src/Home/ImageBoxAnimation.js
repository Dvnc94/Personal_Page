import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from "../../public/Software.jpg";
import { BoxAnimated } from './BoxAnimated';

const ImageBox = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: top center;
  
`;

class ImageBoxAnimation extends Component {
    componentWillMount() {
      this.setState({
        animationNumber: 1
      });
  
      setTimeout(this.startNextAnimation, 500);
      setTimeout(this.startNextAnimation, 1000);
      setTimeout(this.startNextAnimation, 1500);
      setTimeout(this.startNextAnimation, 2000);
      setTimeout(this.startNextAnimation, 2500);
      setTimeout(this.startNextAnimation, 3000);
      setTimeout(this.startNextAnimation, 3500);
      setTimeout(this.startNextAnimation, 4000);
      setTimeout(this.startNextAnimation, 4500);
    }
  
    startNextAnimation = () => {
      this.setState({
        animationNumber: this.state.animationNumber + 1
      });
    };
    render() {
      const { animationNumber } = this.state;
      return (
        <ImageBox>
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 1}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 2}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 3}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 4}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 5}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 6}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 7}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 8}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 9}
          />
  
          <BoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 10}
          />
        </ImageBox>
      );
    }
  }
  
  export default ImageBoxAnimation;