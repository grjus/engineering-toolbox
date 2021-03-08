import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:flex-start;
position:relative;
left:20px;
opacity:0;
transition:opacity 0.2s ease-in;
${({ isRunning }) => isRunning && `
opacity:1;
`}
`;

export const Message = styled.span`
font-size:16px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
padding:10px;
`;
