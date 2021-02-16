import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Bar = styled.div`
display:flex;
justify-content:space-evenly;
/* width:100%; */
background-color:#BAB2B5;
padding:20px;
`;

export const Logo = styled.a`
text-decoration:none;
color:#123C69;
letter-spacing:0.8px;
font-weight:bold;
font-size:20px;
transition:color 0.3s ease-in-out;
&:hover{
    color:#AC3B61
}

`;

export const Anchor = styled(NavLink)`
text-decoration:none;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
font-size:18px;
`;
