import styled from 'styled-components';
import { Title } from '../ToolboxComponents/Card/style';
import { theme } from '../../style';

export const FormContent = styled.div`
padding:10px 0px 10px 10px;
width:100%;
display:block;
${({ flex }) => flex && `
display:flex;
justify-content:space-around;
`}
`;

export const OpacityBlock = styled.div`
display:block;
opacity:1;
transition: opacity 0.3s ease-in-out;
${({ disabled }) => disabled && `
opacity:0.4;
pointer-events: none;
`}
`;

export const InputBlock = styled.div`
margin-top:30px;
transition: opacity 0.2s ease-in;
opacity:1;
`;

export const Separator = styled.hr`
border:1px solid rgba(0,0,0,0.2);
width:80%;
`;

export const Header = styled(Title)`
margin-left:${(props) => (props.noOffset ? '0px' : '20px')};
margin-top:0px;
font-weight:bold;
color:${theme.logoColor}
`;
