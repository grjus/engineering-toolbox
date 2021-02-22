import { withStyles } from '@material-ui/core';
import HelpOutline from '@material-ui/icons/HelpOutline';
import styled from 'styled-components';
import { theme } from '../../../style';

export const ToastIcon = withStyles({
  root: {
    fontSize: '22px',
  },
  colorPrimary: {
    fill: 'rgba(0,0,0,0.4)',
  },
})(HelpOutline);

export const Title = styled.p`
font-size:${(props) => (props.small ? '14px' : '16px')};
letter-spacing:0.5px;
font-weight:${(props) => (props.small ? 'normal' : 'bold')};
color:${(props) => (props.small ? theme.logoColor : theme.logoColorHover)};
margin-left:${(props) => (props.small ? '10px' : '5px')}
`;

export const Content = styled.div`
padding:0 10px 0 10px;
margin-left:15px;
color:rgba(0,0,0,0.8);
font-size:13px;
letter-spacing:0.3px;
line-height:18px;
line-break:strict;
`;

export const Container = styled.div`
display:block;
overflow-y:scroll;
max-height:250px;
min-height:50px;
`;

export const Image = styled.img`
width:100%;
height:auto;
`;
