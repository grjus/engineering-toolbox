import React from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './styles';

export const TextBox = ({
  name, inputRef, label, error, multiline, fieldType,
}) => (
  <>
    <StyledTextField
      label={label}
      variant="outlined"
      type={fieldType}
      name={name}
      inputRef={inputRef}
      error={!!error}
      helperText={error ? error.message : ' '}
      multiline={multiline}
      rows={10}
    />
  </>
);

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
  multiline: PropTypes.bool,
  fieldType: PropTypes.string,
};

TextBox.defaultProps = {
  error: undefined,
  multiline: false,
  fieldType: 'number',
};
