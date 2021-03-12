import styled from 'styled-components';
import { theme } from '../../../style';
import { Title } from '../../ToolboxComponents/Card/style';

export const Container = styled.div`
font-size:18px;
color:rgba(0,0,0,0.6);
letter-spacing:0.5px;
padding:10px 0 10px 0;

`;

export const Intro = styled(Title)`

position:absolute;
top:140px;
left:20px;

${({ first }) => first && `
font-weight:bold;
word-spacing:10px;
left:20px;
color:${theme.logoColor};
`}
`;
