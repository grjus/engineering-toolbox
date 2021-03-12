/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import StyledTextField from './styles';

export const TextBox = ({
  name, inputRef, label, error, multiline, fieldType, width, disabled,
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
      rows={5}
      width={width}
      disabled={disabled}
    />
  </>
);

const textBoxProps = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
  multiline: PropTypes.bool,
  fieldType: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

TextBox.propTypes = textBoxProps;

TextBox.defaultProps = {
  error: undefined,
  multiline: false,
  fieldType: 'number',
  width: '180px',
  disabled: false,
};

export const FadeTextBox = ({ visible, timeout, ...props }) => (

  <Fade in={visible} timeout={timeout}>
    <div>
      <TextBox {...props} />
    </div>
  </Fade>
);

FadeTextBox.propTypes = {
  timeout: PropTypes.number,
  visible: PropTypes.bool,
};

FadeTextBox.defaultProps = {
  timeout: 1000,
  visible: true,
};
