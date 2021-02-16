import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledLabel } from './style';

function CustomCheckbox({ name, control, label }) {
  return (
    <StyledLabel
      control={(
        <Controller
          name={name}
          control={control}
          render={(props) => (
            <StyledCheckbox
              checked={props.value}
              onChange={(e) => props.onChange(e.target.checked)}
              color="primary"
            />
          )}

        />
    )}
      label={label}
    />
  );
}
CustomCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  control: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

CustomCheckbox.defaultProps = {
  value: false,
  onChange: null,
};

export default CustomCheckbox;
