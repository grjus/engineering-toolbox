import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core';
import { theme } from '../../../style';

export const Container = styled(NavLink)`
font-family: 'Abel', sans-serif;
display:flex;
justify-content:space-between;
text-decoration:none;
&:hover{
    color:${(props) => props.theme.logoColorHover};
}
`;

export const Logo = styled.div`
color:${theme.logoColor};
padding-right:5px;
letter-spacing:1px;
font-weight:bold;
font-size:22px;
transition:color 0.3s ease-in-out;
&:hover{
    color:${(props) => props.theme.logoColorHover};
}

`;

const logoIcoTheme = (icoTheme) => ({
  root: {
    transform: (props) => (props.show),
    transition: icoTheme.transitions.create(['transform'], {
      easing: icoTheme.transitions.easing.sharp,
      duration: icoTheme.transitions.duration.standard,

    }),
    marginTop: '3px',
  },
  colorPrimary: {
    color: theme.logoColor,
  },

});
export const LogoIcon = withStyles(logoIcoTheme)(SettingsIcon);
