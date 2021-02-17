import { Checkbox, withStyles, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../../style';

const StyledCheckbox = withStyles({
  root: {
    '&$checked': {
      color: `${theme.logoColor}`,
    },
    primaryColor: {
      color: `${theme.logoColorHover}`,
    },

  },
  checked: {},
})(Checkbox);

const StyledLabel = withStyles({
  label: {
    fontSize: '15px',
  },
})(FormControlLabel);

const CheckboxWrapper = styled.div`
display:block;
margin-top:-8px;
`;

export {
  StyledCheckbox, StyledLabel, CheckboxWrapper,
};
