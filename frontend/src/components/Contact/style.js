import styled from 'styled-components';
import { theme } from '../../style';

export const ConfirmMessage = styled.p`
font-size:16px;
letter-spacing:0.5px;
color:${(props) => (props.color ? props.color : theme.logoColor)}
`;

export const Header = styled.h2`
color:${theme.logoColor};
letter-spacing:0.8px;
word-spacing:2px;
`;

export const Error = styled.p`
font-size:14px;
letter-spacing:0.5px;
color:${theme.logoColorHover};
padding:0px;
margin:0px;
font-weight:bold;
`;

export const Description = styled.div`
color:rgba(0,0,0,0.8);
letter-spacing:0.2px;
padding:5px 10px 20px 0px;
font-size:18px;
line-height:30px;
`;
