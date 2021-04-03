import styled from 'styled-components';
import { theme, Container } from '../../style';

export const FormContainer = styled(Container)`
width:50%;
@media(max-width:80em){
    width:80%;
}
`;

export const ConfirmMessage = styled.p`
font-size:1rem;
letter-spacing:0.05em;
color:${(props) => (props.color ? props.color : theme.logoColor)}
`;

export const Header = styled.h2`
color:${theme.logoColor};
letter-spacing:0.06em;
word-spacing:0.05em;
`;

export const Error = styled.p`
font-size:14px;
letter-spacing:0.05em;
color:${theme.logoColorHover};
padding:0px;
margin:0px;
font-weight:bold;
`;

export const Description = styled.div`
color:rgba(0,0,0,0.8);
letter-spacing:0.05em;
padding:0.5em 1em 1em 0;
font-size:1.1rem;
line-height:1.5em;
width:100%;
`;
