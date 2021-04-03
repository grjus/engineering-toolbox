import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../style';

export const MainCardContainer = styled.div`
width:80%;
margin:0 auto;
display:flex;
flex-direction:column;
flex-basis:70%;
padding:10px 10px 20px 10px;
background-color:whitesmoke;
@media(min-width:80em){
    flex-direction:row;
}
`;

export const Title = styled.p`
letter-spacing:0.05em;
padding:0.5em;
color:${theme.logoColor};
font-weight:bold;
font-size:1.5em;
${({ small }) => small && `
font-size:18px;
margin:0;
padding-bottom:10px;
`}
`;
export const Content = styled.div`
display:block;
@media(min-width:80em){

}

`;

export const Image = styled.img`
    width: 300px;
    height: 100%;
    flex-basis:30%;
    margin: auto 0;
@media(max-width:80em){
    display:none;
}

`;

export const AppImage = styled.img`
    width:100%;
    height:auto;
    padding:10px;

`;

export const Description = styled.div`
padding:10px;
font-size:16px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
line-height:26px;
${({ small }) => small && `
font-size:14px;
color:black;
// background-color:whitesmoke;
line-height:22px;
`}

`;

export const SmallCardContainer = styled.div`
width:80%;
display:flex;
justify-content:space-between;
flex-direction:row;
@media(max-width:80em){
    width:100%;
    flex-direction:column;
    justify-content:space-around;
    margin:0 auto;
}

margin:0 auto;

`;

export const SmallCard = styled(NavLink)`
text-decoration:none;
background-color:whitesmoke;
display:flex;
flex-direction:column;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
${({ disabled }) => disabled && `
opacity:0.3;
pointer-events:none;
`}
width:18em;
margin:auto 0.5em;
height:20em;
@media(max-width:80em){
    width:80%;
    margin-bottom:5vh;
    margin-top:0;
    margin-left:auto;
    margin-right:auto;
    height:auto;
}
`;
