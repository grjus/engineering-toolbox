import styled from 'styled-components';
import { theme } from '../../style';

export const Container = styled.nav`
top:0;
position: fixed;
background-color: ${theme.topBarColor};
overflow: hidden;
color: yellow;
width: ${(props) => (props.width)};
height: 100%;
font-size: 14px;
-webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
z-index: 100;
transition: width 0.5s ease-in-out;
`;

export const ItemContainer = styled.ul`
display:block;
position:absolute;

top:200px;
left:20px;
text-decoration:none;
font-size:20px;
letter-spacing:0.7px;
color:rgba(0,0,0,0.6);
white-space: nowrap;
margin:0;
padding:0;
`;

export const SideMenuiItemsContainer = styled.ul`
text-decoration:none;


`;
