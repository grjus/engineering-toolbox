import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { theme } from '../../../style';

export const StyledSpinner = withStyles({
  root: { marginTop: (props) => (props.marginTop ? props.marginTop : '25px') },
  colorPrimary: {
    color: theme.logoColor,
  },
})(CircularProgress);
