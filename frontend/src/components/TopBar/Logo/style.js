import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
