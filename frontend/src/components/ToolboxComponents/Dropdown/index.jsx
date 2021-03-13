/* eslint-disable react/jsx-props-no-spreading */
import React, {} from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, Fade } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { CustomDropDown } from './style';

const DropDown = ({
  name, control, dropDownItems, handleChange,
}) => (
  <Controller
    render={(props) => (
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        input={<CustomDropDown />}
        defaultValue={dropDownItems[0].value}
        value={props.value}
        onChange={(e) => {
          props.onChange(e);
          handleChange(e);
        }}
      >
        {dropDownItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
        ))}

      </Select>
    )}
    name={name}
    control={control}
  />
);
DropDown.propTypes = {
  handleChange: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  control: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropDown;

DropDown.defaultProps = {
  handleChange: () => null,
  onChange: () => null,
  value: null,
};

export const FadeDropDown = ({
  visible, timeout, unmountOnExit, style, ...props
}) => (

  <Fade in={visible} timeout={timeout} unmountOnExit={unmountOnExit}>
    <div style={style}>
      <DropDown {...props} />
    </div>
  </Fade>
);

FadeDropDown.propTypes = {
  timeout: PropTypes.number,
  visible: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
};

FadeDropDown.defaultProps = {
  timeout: 1000,
  visible: true,
  unmountOnExit: true,
  style: {},
};
