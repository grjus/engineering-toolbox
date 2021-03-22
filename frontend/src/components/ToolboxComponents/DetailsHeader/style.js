import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import { theme } from '../../../style';
import { Title } from '../Card/style';

export const IconContainer = styled.div`
display:flex;
justify-content:flex-start;
cursor:pointer;
`;

const iconTheme = (icoTheme) => ({
  root: {
    transform: (props) => (props.show),
    transition: icoTheme.transitions.create(['transform'], {
      easing: icoTheme.transitions.easing.sharp,
      duration: icoTheme.transitions.duration.standard,

    }),
  },
  colorPrimary: {
    color: theme.logoColor,

  },
});
export const DetailIcon = withStyles(iconTheme)(DetailsIcon);

export const Header = styled(Title)`
margin-left:${(props) => (props.noOffset ? '0px' : '20px')};
margin-top:0px;
font-weight:bold;
color:${theme.logoColor}
`;
