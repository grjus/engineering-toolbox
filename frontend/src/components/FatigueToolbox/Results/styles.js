import styled from 'styled-components';

export const SummaryContainer = styled.div`
display: flex;
justify-content:flex-start;
padding:5px;
`;

export const Label = styled.span`
color:'rgba(0,0,0,0.8)';
width:250px;
letter-spacing:0.5px;
`;

export const Content = styled.span`
color:${(props) => (props.danger ? 'crimson' : '#12a112')};
font-weight:bold;
`;

export const StyledContainer = styled.div`
margin-top:10px;
width:130%;
display:block;
height: ${(props) => (props.height ? props.height : '14rem')};
transition:height 0.3s ease-in;
overflow-y:hidden;
overflow-x:auto;
${({ hidden }) => hidden && `
height:0px;
`}
`;
