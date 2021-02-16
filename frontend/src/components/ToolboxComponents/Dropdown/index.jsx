import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { CustomDropDown } from './style';

const DropDown = ({ handleChange, value, dropDownItems }) => (
  <Select
    value={value}
    onChange={handleChange}
    input={<CustomDropDown />}
  >
    {dropDownItems.map((item) => (
      <MenuItem value={item.value}>{item.name}</MenuItem>
    ))}
  </Select>
);

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default DropDown;
