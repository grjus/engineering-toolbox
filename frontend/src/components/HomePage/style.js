import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../style';

export const MainCardContainer = styled.div`
display:flex;
padding:10px 10px 20px 10px;
background-color:whitesmoke;
`;
export const Content = styled.div`
flex-grow:0;
flex-shrink:0;
flex-basis:70%;
`;

export const Image = styled.img`
flex-grow:0;
flex-shrink:0;
flex-basis:30%;
${({ small }) => small && `
    width:280px;
    padding:10px;
`}
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

export const Title = styled.p`
letter-spacing:0.8px;
padding:5px;
color:${theme.logoColor};
font-weight:bold;
font-size:22px;
${({ small }) => small && `
font-size:18px;
margin:0;
padding-bottom:10px;
`}
`;

export const SmallCardContainer = styled.div`
display:flex;
justify-content:space-between;
padding:20px;

`;

export const SmallCard = styled(NavLink)`
border-radius:10px;
text-decoration:none;
background-color:whitesmoke;
display:flex;

width:300px;
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


`;
