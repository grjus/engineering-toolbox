import styled from 'styled-components';
import { theme } from '../../style';

export const Logo = styled.div`
position:relative;
font-family: 'Abel', sans-serif;
display:flex;
justify-content:center;
color:${theme.logoColor};
width:100%;
`;

export const LogoTitle = styled.h1`
font-size:34px;
padding-right:10px;
`;

export const LogoFooter = styled.div`
font-size:16px;
letter-spacing:1px;
text-align:center;
position:relative;
margin-top:-20px;
`;

export const Section = styled.div`
padding:10px;

`;
