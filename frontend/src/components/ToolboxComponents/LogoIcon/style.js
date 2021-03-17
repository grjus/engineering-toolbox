import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core';
import { theme } from '../../../style';

const logoIcoTheme = (icoTheme) => ({
  root: {
    transform: (props) => (props.show),
    transition: icoTheme.transitions.create(['transform'], {
      easing: icoTheme.transitions.easing.sharp,
      duration: icoTheme.transitions.duration.standard,

    }),
    marginTop: (props) => props.margintop,
  },
  colorPrimary: {
    color: theme.logoColor,
  },

});
export const LogoIcon = withStyles(logoIcoTheme)(SettingsIcon);
