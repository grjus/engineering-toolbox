import styled from 'styled-components';

export const Bar = styled.div`
display:flex;
justify-content:space-around;
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
&:hover{
    color:#123C95
}

`;

export const Anchor = styled.a`
text-decoration:none;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
`;
