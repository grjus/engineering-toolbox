import styled from 'styled-components';
import { theme } from '../../../style';

export const Container = styled.div`
top:30px;
left:10px;
display:block;
width:80%;
position:absolute;
font-size:18px;
letter-spacing:0.5px;
padding:0 20px 20px 20px;
/* background-color:whitesmoke; */
`;
export const Title = styled.h3`
color:${theme.logoColor}
`;

export const Message = styled.p`
font-size:18px;
color:rgba(0,0,0,0.8);

`;
