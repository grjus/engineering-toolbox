import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpinner } from './styles';

const CustomSpinner = ({ marginTop, size }) => <StyledSpinner color="primary" size={size} marginTop={marginTop} />;

export default CustomSpinner;

CustomSpinner.propTypes = {
  marginTop: PropTypes.string,
  size: PropTypes.string,
};

CustomSpinner.defaultProps = {
  marginTop: '25px',
  size: '30px',
};
