import styled from 'styled-components';
import { theme } from '../../../style';

export const Container = styled.div`
top:0rem;
left:10px;
display:block;
max-width:250ch;
position:absolute;
font-size:18px;
letter-spacing:0.5px;
padding:0 1em;
`;

export const Title = styled.h3`
color:${theme.logoColor}
`;

export const Message = styled.p`
color:rgba(0,0,0,0.8);
`;
