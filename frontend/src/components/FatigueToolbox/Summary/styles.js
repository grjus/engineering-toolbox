import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { theme } from '../../../style';

export const Label = styled.span`
letter-spacing:0.5px;
width:200px
`;

export const Content = styled.span`
width:150px;
`;

export const List = styled.ul`
list-style:none;
margin:0;
padding-left:25px;
`;

export const ListItem = styled.li`
padding:1px;
display:flex;
justify-content:flex-start;
`;

export const StyledSpinner = withStyles({
  root: {
    marginTop: '25px',
  },
  colorPrimary: {
    color: theme.logoColor,
  },
})(CircularProgress);

export const SpinnerContainer = styled.div`
position:relative;
display:flex;
justify-content:flex-start;
`;
