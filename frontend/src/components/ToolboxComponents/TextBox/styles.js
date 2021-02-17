import { withStyles, TextField } from '@material-ui/core';
import { theme } from '../../../style';

const StyledTextField = withStyles({
  root: {
    width: '180px',
    '& label.Mui-focused': {
      color: `${theme.logoColor}`,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${theme.logoColor}`,
      },
      '&:hover fieldset': {
        borderColor: `${theme.logoColor}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.logoColor,
      },

    },
  },
})(TextField);

export default StyledTextField;
