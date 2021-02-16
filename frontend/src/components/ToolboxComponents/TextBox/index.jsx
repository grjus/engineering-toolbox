import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export const TextBox = ({ value, handleChange }) => (
  <>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={handleChange} />
  </>
);

TextBox.propTypes = {
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
