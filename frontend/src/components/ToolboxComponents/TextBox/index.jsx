import React from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './styles';

export const TextBox = ({ name, inputRef, label }) => (
  <>
    <StyledTextField id="outlined-basic" label={label} variant="outlined" name={name} inputRef={inputRef} />
  </>
);

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
