import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

function CustomButton({
  handleClick, label, disabled, buttonType, color,
}) {
  return (
    <StyledButton onClick={handleClick} variant={buttonType} color={color} disabled={disabled}>
      {label}
    </StyledButton>
  );
}

CustomButton.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonType: PropTypes.oneOf(['outlined', 'contained']).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

CustomButton.defaultProps = {
  disabled: false,
  handleClick: () => null,
};

export default CustomButton;
