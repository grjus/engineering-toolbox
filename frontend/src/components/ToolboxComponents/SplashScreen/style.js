import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import { theme } from '../../../style';

export const Container = styled.div`
display:block;
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
padding: 10px;
margin: auto 0;
min-width: 30%;
height:30%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const Logocontainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`;

export const Title = styled.p`
font-size:36px;
color:${theme.logoColor};
letter-spacing:1px;
font-family: 'Abel', sans-serif;
text-align:center;
padding-right:10px;
`;

export const DescriptionContainer = styled.div`
display:flex;
flex-direction:column;
`;

export const Description = styled.p`
position:absolute;
bottom:20px;
width:100%;
text-align:center;
font-size:22px;
color:rgba(0,0,0,0.6);
padding:10px;
`;

export const Bar = styled.div`
position:absolute;
bottom:30px;
width:100%;
margin:auto;
left:25%;
`;

export const StyledProgress = withStyles({
  root: {
    height: '2px',
    width: '50%',
  },

  bar1Indeterminate: {
    backgroundColor: theme.logoColor,

  },
  bar2Indeterminate: {
    backgroundColor: theme.logoColorHover,
  },
})(LinearProgress);
