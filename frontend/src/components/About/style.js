import styled from 'styled-components';
import { theme } from '../../style';

export const Container = styled.div`
display:block;

padding:20px;
`;

export const Title = styled.h2`
color:${theme.logoColor}
`;

export const Description = styled.p`
color:rgba(0,0,0,0.8);
font-size:18px;
word-spacing:5px;
line-height:28px;
`;
