/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import StyledTextField from './styles';

export const TextBox = ({
  name, inputRef, label, error, multiline, fieldType, width, disabled, variant,
}) => (
  <>
    <StyledTextField
      label={label}
      variant={variant}
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
  variant: PropTypes.string,
};

TextBox.propTypes = textBoxProps;

TextBox.defaultProps = {
  error: undefined,
  multiline: false,
  fieldType: 'number',
  width: '180px',
  disabled: false,
  variant: 'outlined',
};

export const FadeTextBox = ({
  visible, timeout, unmountOnExit, style, ...props
}) => (

  <Fade in={visible} timeout={timeout} unmountOnExit={unmountOnExit}>
    <div style={style}>
      <TextBox {...props} />
    </div>
  </Fade>
);

FadeTextBox.propTypes = {
  timeout: PropTypes.number,
  visible: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
};

FadeTextBox.defaultProps = {
  timeout: 1000,
  visible: true,
  unmountOnExit: false,
  style: {},
};
