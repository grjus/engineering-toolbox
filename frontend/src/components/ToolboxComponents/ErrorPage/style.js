import styled from 'styled-components';
import { theme } from '../../../style';

export const Container = styled.div`
display:block;
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
padding: 10px;
margin: auto 0;
min-width: 50%;
height:40%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

`;

export const Title = styled.h1`
padding:10;
display:block;
color:${theme.logoColor};
text-align:center;
`;

export const Description = styled.div`
position:absolute;
padding:20px;
top:50%;
left:50%;
transform:translate(-50%,0);
text-align:center;
display:block;
font-size:22px;
width:100%;
`;
