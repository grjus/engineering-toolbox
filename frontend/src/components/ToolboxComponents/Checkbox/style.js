import { Checkbox, withStyles, FormControlLabel } from '@material-ui/core';
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

export { StyledCheckbox, StyledLabel };
