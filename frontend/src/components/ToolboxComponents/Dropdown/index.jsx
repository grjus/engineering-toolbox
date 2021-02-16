import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { CustomDropDown } from './style';

const DropDown = ({ handleChange, value, dropDownItems }) => (
  <Select
    labelId="demo-customized-select-label"
    id="demo-customized-select"
    value={value}
    onChange={handleChange}
    input={<CustomDropDown />}
  >
    {dropDownItems.map((item) => (
      <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
    ))}
  </Select>
);

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropDown;
