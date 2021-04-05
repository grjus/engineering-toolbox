import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const theme = {
  // topBarColor: '#BAB2B5',
  // topBarColor: 'whitesmoke',
  topBarColor: 'white',
  topBarPadding: '20px',
  logoColor: '#123C69',
  logoColorHover: '#AC3B61',
  linkColor: 'rgba(0,0,0,0.8)',
};

export const LogoBox = styled.div`
white-space:nowrap;
margin:auto 0;
height:100%;
padding-inline-start:1em;

`;

export const Bar = styled.header`
background-color:rgba(240,240,240,0.99);
display:flex;
justify-content:flex-start;
position:fixed;
z-index:99;
width:100%;
padding:0.8rem;
min-height:6em;
`;

export const Anchor = styled(NavLink)`
text-decoration:none;
color:${(props) => props.theme.linkColor};
font-size:1.1rem;
opacity:1;

@media(max-width:80em){
  opacity:0;
  line-height:1.1rem;
  white-space:nowrap;
}
`;

export const NavLinkUl = styled.ul`
flex-basis:80%;
display:flex;
justify-content:space-around;
width:100%;
height:100%;
margin: auto 0;
`;
