import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core';
import { theme } from '../../style';

export const CloseIco = withStyles({
  root: {
    color: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: '20px',
    left: '230px',
    cursor: 'pointer',
  },
})(CloseIcon);

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
white-space: nowrap;
`;

export const ItemContainer = styled.div`
display:block;
position:relative;
text-decoration:none;
font-size:20px;
letter-spacing:0.7px;
color:rgba(0,0,0,0.6);

margin:0;
padding:0;
`;

export const SideMenuiItemsContainer = styled.div`
display:flex;
flex-direction:column;
text-decoration:none;
position:relative;
top:200px;
left:30px;

`;

export const TitleExpSubItems = styled.div`
max-height:80px;
overflow:hidden;
padding:0;
margin:0;
transition: max-height 0.5s ease-in-out;
${({ hideMenu }) => hideMenu && `
max-height:0px;
`}
`;

const mainLinkStyle = css`
display:block;
font-size:20px;
letter-spacing:0.5px;
cursor: pointer;
padding:15px 0 0 0;
margin:0px 0 10px 0;
`;

export const ItemLink = styled.div`
${mainLinkStyle}
`;

export const ItemNavLink = styled(NavLink)`

${mainLinkStyle}
text-decoration:none;
&.active{
    color:${theme.logoColor};
    font-weight:bold;

}
`;

export const SubitemNavlink = styled(NavLink)`
display:block;
color:rgba(0,0,0,0.6);
text-decoration:none;
font-size:16px;
margin:0;
padding:0px 0 10px 10px;
transition: all 0.3s ease-in-out;
&:hover{
    color:${theme.logoColorHover};
    /* font-weight:bold; */
};
&.active{
    color:${theme.logoColor};
    font-weight:bold;
}
`;
