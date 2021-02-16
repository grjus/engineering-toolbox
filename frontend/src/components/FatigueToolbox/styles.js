// WARNING REMOVE BEFORE PRODUCTION
// Used to silcense strict mode
// <<findDOMNode is deprecated in StrictMode. findDOMNode was
// passed an instance of Transition which is inside StrictMode">>
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/';
import { theme as globalTheme } from '../../style';

const theme = {
  iconSize: '16px',
  iconSizeActive: '20px',
  fontSize: '16px',
  fontSizeActive: '20px',
};

export const StepperTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: globalTheme.logoColor,
          fontSize: theme.iconSize,
        },
        '&$active': {
          color: globalTheme.logoColorHover,
          fontSize: theme.iconSizeActive,
        },
      },
      active: {},
      completed: {},
    },
    MuiStepLabel: {
      label: {
        '&$completed': {
          color: theme.stepperTagColor,
          fontSize: theme.fontSize,
        },
        '&$active': {
          color: theme.stepperTagColor,
          fontSize: theme.fontSizeActive,
          letterSpacing: '1.5px',
        },
      },
    },
    palette: {

    },
  },
});
