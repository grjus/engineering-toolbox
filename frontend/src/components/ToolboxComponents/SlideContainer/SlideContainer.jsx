import React from 'react';
import { Slide } from '@material-ui/core';
import PropTypes from 'prop-types';

export const SlideContainer = ({ children, condition, timeout }) => (
  <Slide in={condition} timeout={timeout}>
    <div>
      {children}
    </div>
  </Slide>

);

SlideContainer.propTypes = {
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number.isRequired,
  condition: PropTypes.bool.isRequired,
};
