import React from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './styles';

export const TextBox = ({
  name, inputRef, label, error,
}) => (
  <>
    <StyledTextField
      label={label}
      variant="outlined"
      type="number"
      name={name}
      inputRef={inputRef}
      error={!!error}
      helperText={error ? error.message : ' '}
    />
  </>
);

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
