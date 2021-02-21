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
