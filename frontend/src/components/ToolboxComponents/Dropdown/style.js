import { withStyles, InputBase } from '@material-ui/core';
import { theme as globalTheme } from '../../../style';

export const CustomDropDown = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
      'Arial',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: `${globalTheme.logoColor}`,
      boxShadow: `0 0 0 0.05rem ${globalTheme.logoColor}`,
    },
  },
}))(InputBase);
