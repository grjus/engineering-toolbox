import { withStyles, TextField } from '@material-ui/core';
import { theme } from '../../../style';

const StyledTextField = withStyles({
  root: {
    width: (props) => (props.width ? props.width : '180px'),
    '& label.Mui-focused': {
      color: `${theme.logoColor}`,
    },
    maxHeight: '500px',

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
