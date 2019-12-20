import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

const Box = styled.div`
  height: ${props => props.heightPercentage}%;
  width: 100%;
  background: #fff;
  transform-origin: ${props => props.xDirection} center;
`;

export const BoxAnimated = ({
  startAnimation = false,
  heightPercentage,
  reverseDirection = false
}) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {style => (
      <Box
        heightPercentage={heightPercentage}
        xDirection={reverseDirection ? `left` : `right`}
        style={{
          transform: `scaleX(${style.scaleX})`
        }}
      />
    )}
  </Motion>
);

BoxAnimated.propTypes = {
  startAnimation: PropTypes.bool,
  heightPercentage: PropTypes.number.isRequired,
  reverseDirection: PropTypes.bool
};