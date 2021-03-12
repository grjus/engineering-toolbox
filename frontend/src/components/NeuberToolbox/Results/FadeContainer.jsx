import React from 'react';
import { Fade } from '@material-ui/core';
import PropTypes from 'prop-types';

export const FadeContainer = ({ children, condition, timeout }) => (
  <Fade in={condition} timeout={timeout}>
    <div>
      {children}
    </div>
  </Fade>

);

FadeContainer.propTypes = {
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number.isRequired,
  condition: PropTypes.bool.isRequired,
};
