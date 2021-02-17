import { withStyles, Button } from '@material-ui/core';
import { theme } from '../../../style';

const StyledButton = withStyles({
  root: {
    height: '40px',
    maxWidth: '130px',
    color: 'rgba(0,0,0,0.8)',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  containedPrimary: {
    backgroundColor: theme.logoColor,
    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderColor: theme.logoColor,
      color: 'rgba(0,0,0,0.8)',
    },
  },
  containedSecondary: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderColor: theme.logoColor,
    },
  },
  outlinedPrimary: {
    borderColor: theme.logoColor,
    color: theme.logoColor,
    '&:hover': {
      backgroundColor: theme.mainLayoutColor,
      borderColor: theme.logoColor,
    },
  },

})(Button);

export default StyledButton;
